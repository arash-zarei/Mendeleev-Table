import React from "react";

// Components
import ElementTable from "./ElementTable";

// Elements Data
import {
  period_1,
  period_2,
  period_3,
  period_4,
  period_5,
  period_6,
  period_7,
  actinideSeries,
  lanthanideSeries,
} from "../assets/elementsTable";

const BodyTable = () => {
  return (
    <div className="mx-auto w-[1477px] border-blue-800 border-2 flex flex-col items-center">
      <div>
        <div className="period1 flex items-center justify-between">
          {period_1.map((element) => (
            <ElementTable data={element} />
          ))}
        </div>
        <div className="period2 flex items-center justify-between">
          <div className="part1 flex">
            {period_2[0].map((element) => (
              <ElementTable data={element} />
            ))}
          </div>
          <div className="part2 flex">
            {period_2[1].map((element) => (
              <ElementTable data={element} />
            ))}
          </div>
        </div>
        <div className="period3 flex items-center justify-between">
          <div className="part1 flex">
            {period_3[0].map((element) => (
              <ElementTable data={element} />
            ))}
          </div>
          <div className="part2 flex">
            {period_3[1].map((element) => (
              <ElementTable data={element} />
            ))}
          </div>
        </div>
        <div className="period4 flex">
          {period_4.map((element) => (
            <ElementTable data={element} />
          ))}
        </div>
        <div className="period5 flex">
          {period_5.map((element) => (
            <ElementTable data={element} />
          ))}
        </div>
        <div className="period6 flex">
          {period_6.map((element) => (
            <ElementTable data={element} />
          ))}
        </div>
        <div className="period7 flex">
          {period_7.map((element) => (
            <ElementTable data={element} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center w-[100%] mt-5">
        <div className="lanthanideSeries flex">
        {lanthanideSeries.map((element) => (
            <ElementTable data={element} />
          ))}
        </div>
        <div className="actinideSeries flex">
        {actinideSeries.map((element) => (
            <ElementTable data={element} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyTable;
