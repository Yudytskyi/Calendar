import React from "react";
import "./styles.scss";

const LeftBlock = () => {
  const week = {
    "0": "sunday",
    "1": "monday",
    "2": "tuesday",
    "3": "wednesday",
    "4": "thursday",
    "5": "friday",
    "6": "saturday",
  };
  const currentDate = new Date();
  return (
    <div className="left-block">
      <div className="left-block__title">
        <span>{week[currentDate.getDay()]}</span>
      </div>
      <div className="left-block__content">
        <span>{currentDate.getDate()}</span>
      </div>
    </div>
  );
};

export default LeftBlock;
