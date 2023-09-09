import React from "react";

const CustomButton = ({ btntype, title, handleClick, styles }) => {
  return (
    <button
      type={btntype}
      className={`invest invest p-3 mt-4`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
