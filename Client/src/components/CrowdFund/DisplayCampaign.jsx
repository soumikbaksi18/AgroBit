import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// import loader from "../assets/loader.svg";
import ProjectCard from "./ProjectCard";

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-page/${campaign.title}`, { state: campaign });
  };

  return (
    <div>
      <div className=" grid grid-cols-1  md:grid-cols-3 md:gap-3 mb-10 ">
        {isLoading && <img src="" alt="loader" className="" />}

        {!isLoading && campaigns.length === 0 && (
          <p className="">You have not created any campigns yet</p>
        )}

        {!isLoading &&
          campaigns.length > 0 &&
          campaigns.map((campaign) => (
            <ProjectCard
              className="flex"
              key={uuidv4()}
              {...campaign}
              handleClick={() => handleNavigate(campaign)}
            />
          ))}
      </div>
    </div>
  );
};

export default DisplayCampaigns;
