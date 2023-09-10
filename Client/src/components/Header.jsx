import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logo from "./Logo";

import { useStateContext } from "../context/ContractContext";

const Header = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { connect, address } = useStateContext();

  return (
    <div className="mx-32 mt-4">
      <nav className="w-full flex justify-between items-center">
        <a href="/">
          {" "}
          <Logo />
        </a>

        <div className="">
          <div className=" h-[59px] px-8 mr-10 py-4 bg-green-900 rounded-lg justify-center items-center gap-2 inline-flex">
            <Link
              className="text-center text-zinc-100 text-lg font-semibold leading-[27px] cursor-pointer"
              // onClick={() => {
              //   if (address) navigate("create-campaign");
              //   else connect();
              // }}
              to={address ? "/all" : connect()}
            >
              {address ? "View AgroTech Projects" : "Connect"}
            </Link>
          </div>
          <div className="w-[130px] h-[59px] px-8 py-4 bg-green-900 rounded-lg justify-center items-center gap-2 inline-flex">
            <Link
              className="text-center text-zinc-100 text-lg font-semibold leading-[27px] cursor-pointer"
              to={currentUser ? "/system" : "/register"}
            >
              {currentUser ? "Dashboard" : "Sign up"}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
