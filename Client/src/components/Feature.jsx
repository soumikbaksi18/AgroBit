import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import gears from "../assets/images/gears.svg";
import trees from "../assets/images/trees.svg";

const Feature = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <div className="mx-32" id="feat">
        {" "}
        <h1 className="text-green-800 font-semibold text-5xl mt-16 mb-20">
          How do we do it?
        </h1>
        <div className="flex justify-around items-center mx-20 ">
          <div className="white-box  flex flex-col w-1/2 mr-5">
            <img src={gears} className="w-full rounded-lg" />

            <div className="mb-4">
              <h1 className="text-green-800 font-semibold my-10 text-3xl">
                Crop Recommendation System
              </h1>
              <p className="text-lg font-semibold mx-10">
                Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
            </div>
          </div>

          <div className="white-box  flex flex-col w-1/2 ml-5">
            <img src={trees} className="w-full rounded-lg" />

            <div className="mb-4">
              <h1 className="text-green-800 font-semibold my-10 text-3xl">
                Weather Report System
              </h1>
              <p className="text-lg font-semibold mx-10 ">
                Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-12">
          <div className="px-8 py-4 bg-green-900  rounded-lg">
            <Link
              className="text-center text-zinc-100 text-lg font-semibold leading-[27px] cursor-pointer"
              to={currentUser ? "/system" : "/register"}
            >
              {currentUser
                ? "  Try out our crop recommendation system"
                : "  Try out our crop recommendation system"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
