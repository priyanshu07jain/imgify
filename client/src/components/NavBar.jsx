import React, { useContext } from "react";
import { assets } from "../assets/assets.js";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";
const NavBar = () => {
const{user,setshowLogin,logout,credit}=useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between py-4">
      <Link to={"/"}>   
        {" "}
        <img src={assets.logo} alt="logo" className="w-28 sm:w-32 lg:w-40 " />
      </Link>
      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <button className=" flex items-center gap-2 bg-blue-100 px-6 sm:px-6  py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all  duration-700">
              <img className="w-5 " src={assets.credit_star}></img>
              <p className=" text-xs  sm:text-sm font-medium  text-gray-600" onClick={()=>{navigate("/buy")}}> Credit Left:{credit}</p>
            </button>
            <p className=" text-gray-600 max-sm:hidden pl-4">{user.name}</p>
            <div className=" relative group">
              <img
                src={assets.profile_icon}
                className=" w-10 drop-shadow"
              ></img>
              <div className=" absolute hidden group-hover:block  top-0 right-0 z-10 text-black rounded pt-12 ">
                <ul className=" list-none  m-0 p-2 bg-white  rounded-md border border-gray-300 text-sm">
                  <li onClick={logout} className="py-1 px-2 cursor-pointer pr-10">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          //LOg out
          <div className="flex items-center gap-2 sm:gap-5">
            <p
              className=" cursor-pointer"
              onClick={() => {
                navigate("/buy");
              }}
            >
              Pricing
            </p>
            <button className=" bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full" onClick={()=>{setshowLogin(true)}}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
