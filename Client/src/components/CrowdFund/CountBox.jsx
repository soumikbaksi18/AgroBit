import React from "react";
import styles from "../../style";
const CountBox = ({ title, value }) => {
  return (
    <div>
      <h4
        className={`text-green-900 text-3xl font-semibold leading-10  text-left`}
      >
        {value}
      </h4>
      <h3 className="text-neutral-500 text-sm font-semibold leading-loose text-left">
        {title}
      </h3>
    </div>
  );
};

export default CountBox;
