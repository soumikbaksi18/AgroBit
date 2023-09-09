import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logo from "./Logo";

const Header = () => {
  const { currentUser } = useAuth();

  return (
    <div className="m-4">
      <nav className="w-full flex justify-between items-center">
        <Logo/>

        <div className="w-[130px] h-[59px] px-8 py-4 bg-green-900 rounded-lg justify-center items-center gap-2 inline-flex">
          <Link
            className="text-center text-zinc-100 text-lg font-semibold leading-[27px] cursor-pointer"
            to={currentUser ? "/system" : "/register"}
          >
            {currentUser ? "Dashboard" : 'Sign up'}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
