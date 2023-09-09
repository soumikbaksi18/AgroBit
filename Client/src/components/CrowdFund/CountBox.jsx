import React from "react";
import styles from "../../style";
const CountBox = ({ title, value }) => {
  return (
    <div>
      <h4 className={`${styles.texts2} p-1 text-3xl`}>{value}</h4>
      <h3 className="text-blue-300">{title}</h3>
    </div>
  );
};

export default CountBox;
