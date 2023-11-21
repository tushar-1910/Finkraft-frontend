import { Route, Routes, useNavigate } from "react-router-dom";
import DashBoard from "../components/DashBoard";
import Navbar from "../components/Navbar";
import Extractions from "../components/Extractions";
import Users from "../components/Users";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken, setUserDetails } from "../store/reducers/userSlice";
import Cookies from "js-cookie";
import CommingSoon from "../components/CommingSoon";

const Admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // checks if token and user cookie are available otherwise redirects to login page
  useEffect(() => {
    if (Cookies.get("token") && Cookies.get("user")) {
      dispatch(setUserDetails(JSON.parse(Cookies.get("user"))));
      dispatch(setToken(Cookies.get("token")));
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div className="h-screen w-full flex bg-[#F1F1FA]">
      <Navbar />
      <div className="flex flex-1">
        <Routes>
          <Route path="" element={<DashBoard />} />
          <Route path="/extractions" element={<Extractions />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<CommingSoon />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
