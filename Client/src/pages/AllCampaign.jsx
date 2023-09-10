import React, { useState, useEffect } from "react";
import { useStateContext } from "../context/ContractContext";

import DisplayCampaigns from "../components/CrowdFund/DisplayCampaign";
import Header from "../components/Header";
import cbg from "../../src/assets/images/bgimg.png";
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
        <div id="item1" className="hero  min-h-[65vh]">
          <div className="-mt-16 hidden sm:block">
            <img src={cbg} className="absolute -z-20 top-0" alt="" />
          </div>
        </div>
      </div>

      {/* Projects Sections */}
      <div className="projects px-40">
        <h1 className=" text-3xl font-semibold text-left  mb-10 poppin">
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
