import { useNavigate } from "react-router-dom";
import logoBlack from "../assets/logo-black.svg";
import { ErrorMessage, Field, Form, Formik } from "formik";
import userCredentials from "../usercredentials.json";
import md5 from "md5";
import Spinner from "../components/Spinner";
import { useDispatch } from "react-redux";
import { setToken, setUserDetails } from "../store/reducers/userSlice";
import Cookies from "js-cookie";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // checks if token and user cookie are available then redirects to admin page
  useEffect(() => {
    if (Cookies.get("token") && Cookies.get("user")) {
      navigate("/admin");
    }
  }, []);

  return (
    <div className="flex h-screen">
      <div className="w-[44%] flex justify-center items-center">
        <img src={logoBlack} className="drop-shadow-lg w-[60%]" />
      </div>
      <div className="w-[56%] flex justify-center items-center bg-gradient-to-r from-[#1a4d3d] to-[#43c69c]">
        <div className="login-form-container">
          <h1 className="text-[1.7rem] font-bold mb-4">Sign in to your account</h1>
          <Formik
            initialValues={{ username: "", password: "", rememberme: false }}
            validate={(values) => {
              let errors = {};

              //checks if username is empty
              if (!values.username) {
                errors.username = "Username field is required";
              }
              //checks if password is empty
              if (!values.password) {
                errors.password = "Password field is required";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting, setFieldError }) => {
              //searches the username in the usercredentials json
              let found = userCredentials.find((item) => item?.username === values?.username);

              //checks if username is not found/incorrect
              if (!found) {
                setFieldError("username", "Incorrect Username, please try again");
                setSubmitting(false);
                return;
              }
              //checks if username is found and password is incorrect
              if (found && found?.password !== md5(values?.password)) {
                setFieldError("password", "Incorrect password, please try again");
                setSubmitting(false);
                return;
              }

              //checks if username and password are both correct, then saves the token and userdetails in cookie and redux states
              if (found && found?.password === md5(values?.password)) {
                setSubmitting(false);
                Cookies.set("token", md5(found?.username + found?.password), { expires: values?.rememberme ? 7 : 1 });
                Cookies.set("user", JSON.stringify({ username: found?.username, userName: found?.userName, active_module: found?.active_module, role: found?.role }), { expires: values?.rememberme ? 7 : 1 });
                dispatch(setUserDetails({ username: found?.username, userName: found?.userName, active_module: found?.active_module, role: found?.role }));
                dispatch(setToken(md5(found?.username + found?.password)));
                navigate("/admin");
                return;
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col">
                <label className="text-[0.95rem] my-1 font-medium text-slate-700">Username</label>
                <Field name="username" type="text" className="px-2 py-2 rounded-[0.3rem] font-medium border border-solid border-[#cedad4]" />
                <ErrorMessage name="username" component="p" className="text-sm mb-1 text-red-600" />
                <label className="text-[0.95rem] my-1 font-medium text-slate-700">Password</label>
                <Field name="password" type="password" className="px-2 py-2 rounded-[0.3rem] font-medium border border-solid border-[#cedad4] mt-2" />
                <ErrorMessage name="password" component="p" className="text-sm mb-1 text-red-600" />
                <div className="my-2 flex items-center">
                  <Field type="checkbox" id="rememberme" name="rememberme" className="w-[0.95rem] h-[0.95rem] mr-2 border border-solid border-slate-100" />
                  <label htmlFor="rememberme" className="text-[0.90rem] font-semibold text-slate-600">
                    Stay signed in
                  </label>
                </div>
                <button type="submit" disabled={isSubmitting} className="bg-[#308f71] text-white font-medium px-3 py-2.5 rounded-md mt-4 flex justify-center items-center">
                  {isSubmitting && <Spinner className="w-5 h-5 text-white" />} Login
                </button>
                <p className="text-center mt-7 text-sm font-semibold text-[#308f71] drop-shadow-md">
                  <a className="">forgot your password?</a>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
