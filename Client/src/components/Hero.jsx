import React from "react";
import { Link } from "react-router-dom";
import screens from "../assets/images/screens.png";

const Hero = () => {
  return (
    <div className="mx-32">
      <div className="flex justify-center items-center flex-col">
        <div className=" mt-20 text-center text-green-900 text-6xl font-semibold leading-[70px]">
          We empower agriculture by helping you <br /> make smarter choices
        </div>

        <p className="mt-4 text-center px-24 text-zinc-600 text-lg font-semibold leading-[27px]">
          We plow the fields of innovation, planting the seeds of progress in
          agriculture. Our mission is to empower you with knowledge and funding
          for a greener, smarter, and more sustainable future
        </p>
      </div>

      <div className="flex justify-center mt-12">
        <div className="px-8 py-4 bg-green-900  rounded-lg">
          <a href="#feat" className="text-white  font-semibold text-lg poppins">
            Get Started today
          </a>
        </div>
      </div>

      <div className="my-20 flex justify-center">
        <img src={screens} alt="" className="" />
      </div>
    </div>
  );
};

export default Hero;
