// import creator from "../assets/creator.png";
import { daysLeft } from "../../utils";

const ProjectCard = ({
  owner,
  title,
  description,
  target,
  deadline,
  amountCollected,
  image,
  handleClick,
}) => {
  const remainingDays = daysLeft(deadline);
  return (
    <>
      <div
        className="card flex justify-between px-4 mb-10 md:mb-0"
        onClick={handleClick}
      >
        <div className="flex justify-between">
          <div className="flex ">
            {/* <img src={creator} alt="" className="w-8" /> */}
            <p className="flex text-sm items-center mx-2 poppin">
              {/* {owner.slice(0, 6)}... */}
              John Doe
            </p>
          </div>

          <div className="flex align-items-center">
            <p className="flex text-sm items-center text-gray-500 poppin">
              10 succesful projects
            </p>
          </div>
        </div>

        <div>
          <img src={image} className=" my-4 rounded-xl " />
        </div>

        <div>
          <h1 className="text-sm text-gray-500 poppin">250 backers</h1>
        </div>

        <div className="mt-2">
          <h1 className="poppin text-lg">{title}</h1>
        </div>

        <div className="flex justify-between mt-2">
          <div className="flex flex-col">
            <p className="flex text-sm items-center text-gray-500 poppin">
              Goal
            </p>
            <h3 className="flex text-base items-center text-lime-400 poppin">
              {target} ETH
            </h3>
          </div>

          <div className="flex flex-col">
            <p className="flex text-sm items-center text-gray-500 poppin">
              Achieved
            </p>
            <h3 className="flex text-base items-center text-violet-400 poppin">
              {amountCollected} ETH
            </h3>
          </div>
        </div>

        <div className="bg-white mt-4 p-3 rounded-lg hover:bg-opacity-90 transition ease-in cursor-pointer">
          <div className="flex justify-center align-middle place-items-center">
            <h1 className="text-base font-semibold text-black poppin cursor-pointer">
              View Project
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
