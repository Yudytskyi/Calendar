import React from "react";

const ContentTable = (props) => {
  const { currentMonth, onClick } = props;
  return (
    <div className="table content-table">
      {currentMonth.map((i, index) => {
        return (
          <div
            key={`1${index}`}
            id={i}
            className="content-table__item"
            onClick={onClick}
          >
            {i > 0 ? i : ""}
          </div>
        );
      })}
    </div>
  );
};

export default ContentTable;
