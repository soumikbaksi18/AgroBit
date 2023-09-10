import React from "react";
import marketplace from "../assets/images/marketplace.svg";

const About = () => {
  return (
    <>
      <div className="flex justify-center ">
        <div className="mt-10 white-box w-1/3 mb-16">
          <img src={marketplace} alt="" />

          <div className="mb-4">
            <h1 className="text-green-800 font-semibold my-6 text-3xl">
              Agro-Innovation Funding
            </h1>
            <p className="text-lg font-semibold mx-6">
              Invest in the growth of agro-tech. Our crowdfunding marketplace
              connects visionaries like you with groundbreaking projects,
              creating a thriving ecosystem for agro-innovation.
            </p>
          </div>

          <div className="px-8 py-4 bg-green-900  rounded-lg">
            <a
              href="/all"
              className="text-white  font-semibold text-lg poppins"
            >
              Visit Marketplace
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
