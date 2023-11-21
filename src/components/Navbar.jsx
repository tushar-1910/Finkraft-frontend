import Cookies from "js-cookie";
import logoBlack from "../assets/logo-black.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUserDetails } from "../store/reducers/userSlice";

const Navbar = () => {
  const { userdetails } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    dispatch(setToken(""));
    dispatch(setUserDetails({}));
    navigate("/");
  };

  return (
    <div className="w-[13.5%] flex flex-col justify-between border-r-2 h-full pt-10 pb-6 px-6">
      <NavLink to="">
        <img src={logoBlack} alt="logo" className="w-[60%] ml-3 drop-shadow-lg" />
      </NavLink>
      <ul className="flex flex-col px-2">
        {userdetails?.active_module?.includes("home") && (
          <li className="flex items-center uppercase font-bold text-[0.83rem]">
            <NavLink to="" className={() => `nav-link flex items-center w-full text-slate-400 py-3 px-3 rounded-lg relative ${window.location.pathname === "/admin" ? "active" : ""}`}>
              <i className="fa-solid fa-clone mr-3"></i>
              Home
            </NavLink>
          </li>
        )}
        {userdetails?.active_module?.includes("extractions") && (
          <li className="flex items-center uppercase font-bold text-[0.83rem]">
            <NavLink to="extractions" className="nav-link flex items-center w-full text-slate-400 py-3 px-3 rounded-lg">
              <i className="fa-solid fa-arrow-right-arrow-left mr-3"></i>
              Extractions
            </NavLink>
          </li>
        )}
        {userdetails?.active_module?.includes("users") && (
          <li className="flex items-center uppercase font-bold text-[0.83rem]">
            <NavLink to="users" className="nav-link flex items-center w-full text-slate-400 py-3 px-3 rounded-lg">
              <i className="fa-solid fa-user mr-3"></i>
              Users
            </NavLink>
          </li>
        )}
        {userdetails?.active_module?.includes("services") && (
          <li className="flex items-center uppercase font-bold text-[0.83rem]">
            <NavLink to="services" className="nav-link flex items-center w-full text-slate-400 py-3 px-3 rounded-lg">
              <i className="fa-solid fa-bars-staggered mr-3"></i>
              Services
            </NavLink>
          </li>
        )}
        {userdetails?.active_module?.includes("reports") && (
          <li className="flex items-center uppercase font-bold text-[0.83rem]">
            <NavLink to="reports" className="nav-link flex items-center w-full text-slate-400 py-3 px-3 rounded-lg">
              <i className="fa-solid fa-chart-pie mr-3"></i>
              Reports
            </NavLink>
          </li>
        )}
        {userdetails?.active_module?.includes("finance") && (
          <li className="flex items-center uppercase font-bold text-[0.83rem]">
            <NavLink to="finance" className="nav-link flex items-center w-full text-slate-400 py-3 px-3 rounded-lg">
              <i className="fa-solid fa-coins mr-3"></i>
              Finance
            </NavLink>
          </li>
        )}
        {userdetails?.active_module?.includes("profile") && (
          <li className="flex items-center uppercase font-bold text-[0.83rem]">
            <NavLink to="profile" className="nav-link flex items-center w-full text-slate-400 py-3 px-3 rounded-lg">
              <i className="fa-solid fa-user-gear mr-3"></i>
              Profile
            </NavLink>
          </li>
        )}
      </ul>
      <div className="bg-white rounded-xl flex flex-col items-center py-5 px-3">
        <img src="/images/user-profile.jpg" className="w-[40%] rounded-full " />
        <p className="font-semibold my-2">{userdetails?.userName}</p>
        <button onClick={handleLogout} className="bg-[#FCE0E8] text-[#D05C71] font-bold text-[0.7rem] rounded-full px-3.5 py-1 uppercase">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
