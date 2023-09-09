import React, { useState, useEffect } from "react";
import { useStateContext } from "../context/ContractContext";

import DisplayCampaigns from "../components/CrowdFund/DisplayCampaign";
import Header from "../components/Header";
// import cbg from "../../assets/cbg.svg";
// import cbgm from "../../assets/cbgm.svg";
// import Navbar from "../../component/Navbar";

const AllCampaign = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <>
      <Header />
      {/* Hero Section */}
      <div className="md:w-full">
        <div id="item1" className="hero carousel-item min-h-[80vh]">
          <div className="-mt-16 hidden sm:block">
            {/* <img src={cbg} className="h-[80vh]" alt="" /> */}
          </div>
          <div className="-mt-16 sm:hidden ">
            {/* <img src={cbgm} className="w-screen" alt="" /> */}
          </div>
          {/* sm:hidden */}
          <div className="w-full -mt-10 padding-x">
            <div className="flex justify-center">
              <h1 className="text-center text-4xl md:text-7xl poppin font-semibold ">
                Projects that create an impact
              </h1>
            </div>

            <div className="flex justify-center mt-8 ">
              <h3 className="md:text-lg text-md poppin text-center">
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class <br /> aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos.
              </h3>
            </div>

            <div className="flex md:flex-row flex-col justify-center mt-12">
              <a
                href=""
                className="bg-white py-2 px-8 rounded-lg md:mx-12 mx-0  md:mt-0"
              >
                <div className="md:text-lg poppin text-center text-black font-semibold">
                  Invest On Projects
                </div>
              </a>

              <a
                href="create-campaign"
                className="white-btn rounded-md bg-grey py-2 md:px-12 mx-0 md:mt-0 mt-4 text-center"
              >
                <div className="md:text-lg poppin hero-texts text-white font-medium  ">
                  Create crowdfunding campaign
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Sections */}
      <div className="projects padding-x">
        <h1 className="text-white text-3xl font-semibold text-left Z-30 relative nanum mb-16 poppin">
          Featured Projects
        </h1>

        <div className="mb-20">
          <DisplayCampaigns
            title="All Campaigns"
            isLoading={isLoading}
            campaigns={campaigns}
          />
        </div>
      </div>
    </>
  );
};

export default AllCampaign;
