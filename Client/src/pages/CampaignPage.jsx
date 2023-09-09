import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useStateContext } from "../context/ContractContext";
// import { CountBox, CustomButton, Loader } from "../components";
import CustomButton from "../components/CrowdFund/CustomButton";
import { calculateBarPercentage, daysLeft } from "../utils";

// import creator from "../../assets/creator.png";
// import trophy from "../../assets/trophy.svg";
// import medal from "../../assets/medal.svg";
// import award from "../../assets/award.svg";
// import dollar from "../../assets/dollar.svg";
// import watch from "../../assets/watch.png";
// import cut from "../../assets/scenecard.png";
// import delusion from "../../assets/delusion.png";
// import creatorbig from "../../assets/creatorbig.png";

// import disc from "../../assets/discord.svg";
// import telegram from "../../assets/telegram.svg";
// import twitter from "../../assets/twitter.svg";
// import insta from "../../assets/insta.svg";

const CampaignPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { donate, getDonations, contract, address } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [donators, setDonators] = useState([]);

  // const remainingDays = daysLeft(state.deadline);

  const fetchDonators = async () => {
    const data = await getDonations(state.pId);
    setDonators(data);
  };

  useEffect(() => {
    if (contract) fetchDonators();
  }, [contract, address]);

  const handleDonate = async () => {
    setIsLoading(true);

    await donate(state.pId, amount);

    navigate("/all");
    setIsLoading(false);
  };

  return (
    <>
      <div className="padding-x   ml-2">
        {isLoading && (
          <p className="absolute z-50 w-full  text-center">Loading....</p>
        )}
        {state && (
          <div className="">
            {" "}
            {/* hero-section */}
            <div className="flex pt-32 md:flex-row flex-col">
              <div className="md:w-3/5">
                <div className="flex justify-between">
                  <div className="flex ">
                    <img src="" alt="" className="w-14 h-14" />
                    <div className="flex flex-col mx-3">
                      <p className="flex text-sm font-semibold items-center text-gray-500 poppin">
                        John Doe
                      </p>
                      <div className="flex  items-end ">
                        {" "}
                        <p className="text-base poppin  mt-2 ">
                          {" "}
                          {/* {state.owner} */}
                          Creator
                        </p>{" "}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mt-12">
                  <h1 className="poppin text-2xl font-normal">Organisation</h1>
                  <h3 className="poppin text-md text-gray-300 mt-4">
                    {state.description}
                  </h3>
                </div>

                <div className="flex flex-col mt-14">
                  <div className="flex">
                    <img src="" alt="trophy" className="w-10" />
                    <div className="flex items-center ml-4">
                      <h1 className="poppin text-2xl font-normal">
                        Rewards and perks
                      </h1>
                    </div>
                  </div>

                  <div className="flex md:flex-row flex-col justify-between ">
                    <div className="glass1 md:w-[48%] mt-6 border-violet-400 border-2 px-7 py-5 flex items-center">
                      <div className="flex flex-col">
                        <div className="flex mb-4">
                          <img src="" alt="medal" className="w-9" />
                          <div className="flex items-center ml-4">
                            <h1 className="poppin text-base font-normal">
                              Ownership of Project
                            </h1>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xs text-gray-500 poppin pt-1">
                            You become a co-owner of the projects and <br /> get
                            rewards
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="glass2 md:w-[48%] mt-6 px-7 py-5 flex items-center">
                      <div className="flex flex-col">
                        <div className="flex mb-4">
                          <img src="" alt="dollar" className="w-9" />
                          <div className="flex items-center ml-4">
                            <h1 className="poppin text-base font-normal">
                              Revenue share entitlement
                            </h1>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xs text-gray-500 poppin pt-1">
                            You become a co-owner of the projects and <br /> get
                            rewards
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-2/5 flex justify-between ">
                <div className="glass md:ml-20 md:mt-0 mt-6">
                  <div className="mt-2 p-6">
                    <div className="flex justify-between mt-2">
                      <div className="flex flex-col ">
                        <p className="flex text-sm items-center text-gray-500 poppin">
                          Funding goal
                        </p>
                        <h3 className="flex text-2xl items-center text-lime-400 poppin">
                          {state.target} ETH
                        </h3>
                      </div>

                      <div className="flex flex-col mr-24">
                        <p className="flex text-sm items-center text-gray-500 poppin">
                          Backers
                        </p>
                        <h3 className="flex text-2xl items-center poppin">
                          {donators.length}
                        </h3>
                      </div>
                    </div>

                    <div className="flex flex-col mt-8">
                      <p className="flex text-sm text-gray-500 poppin">
                        Currently Raised
                      </p>
                      <h3 className="flex text-2xl items-center text-violet-400 poppin">
                        {state.amountCollected}
                      </h3>

                      <div>{/* Loader */}</div>
                    </div>

                    <div className="flex flex-col mt-60">
                      <input
                        type="number"
                        placeholder="ETH 0.1"
                        step="0.01"
                        className=" py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#b6b6c2] bg-whitefont-epilogue  text-[18px] text-black leading-[30px] placeholder:text-[#4b5264] rounded-[15px]"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                      {/* <button className="invest py-3 mt-4">
                        <h1
                          className="text-xl items-center"
                          handleClick={handleDonate}
                        >
                          Invest
                        </h1>
                      </button> */}
                      <CustomButton
                        btntype="button"
                        title="Invest"
                        handleClick={handleDonate}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CampaignPage;
