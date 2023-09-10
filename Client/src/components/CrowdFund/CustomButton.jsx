import React from "react";

const CustomButton = ({ btntype, title, handleClick, styles }) => {
  return (
    <button
      type={btntype}
      className={`invest  invest text-center w-full h-20 p-2 bg-green-900 rounded-2xl justify-center items-center gap-2 inline-flex`}
      onClick={handleClick}
    >
      <div className="text-white text-xl font-semibold leading-9"> {title}</div>
    </button>
  );
};

export default CustomButton;
