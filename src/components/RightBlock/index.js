import React from "react";
import "./styles.scss";
import TitleTable from "./TitleTable.js";
import ContentTable from "./ContentTable.js";

const RightBlock = ({ currentMonth, onClick, currentDate }) => {
  const month = {
    "0": "January",
    "1": "February",
    "2": "March",
    "3": "April",
    "4": "May",
    "5": "June",
    "6": "July",
    "7": "August",
    "8": "September",
    "9": "October",
    "10": "November",
    "11": "December",
  };
  // document.getElementById("timedate").value = mydate.toString();

  return (
    <div className="right-block">
      <div className="right-block__title">
        <span>
          {month[currentDate.getMonth()]} {currentDate.getFullYear()}
        </span>
      </div>
      <div className="right-block__content">
        <TitleTable />
        <ContentTable currentMonth={currentMonth} onClick={onClick} />
      </div>
    </div>
  );
};

export default RightBlock;
