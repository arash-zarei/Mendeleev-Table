import React from "react";

// Components
import ElementTable from "./ElementTable";
import Categores from "./Categores";
import NumGroup from "./NumGroup";

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

// Number Group Table

import { numberGroup } from "../assets/numberGroup";

const BodyTable = () => {
  return (
    <div className="mx-auto w-[1477px] flex flex-col items-center">
      <div className="flex">
        {
          numberGroup.map(data => <NumGroup key={data.num} number={data.num} text={data.text} />)
        }
      </div>
      <div>
        <div className="period1 flex items-center justify-between">
          {period_1.map((element) => (
            <ElementTable key={element.symbol} data={element} />
          ))}
        </div>
        <div className="period2 flex items-center justify-between">
          <div className="part1 flex">
            {period_2[0].map((element) => (
              <ElementTable key={element.symbol} data={element} />
            ))}
          </div>
          <div className="part2 flex">
            {period_2[1].map((element) => (
              <ElementTable key={element.symbol} data={element} />
            ))}
          </div>
        </div>
        <div className="period3 flex items-center justify-between">
          <div className="part1 flex">
            {period_3[0].map((element) => (
              <ElementTable key={element.symbol} data={element} />
            ))}
          </div>
          <div className="part2 flex">
            {period_3[1].map((element) => (
              <ElementTable key={element.symbol} data={element} />
            ))}
          </div>
        </div>
        <div className="period4 flex">
          {period_4.map((element) => (
            <ElementTable key={element.symbol} data={element} />
          ))}
        </div>
        <div className="period5 flex">
          {period_5.map((element) => (
            <ElementTable key={element.symbol} data={element} />
          ))}
        </div>
        <div className="period6 flex">
          {period_6.map((element) => (
            <ElementTable key={element.symbol} data={element} />
          ))}
        </div>
        <div className="period7 flex">
          {period_7.map((element) => (
            <ElementTable key={element.symbol} data={element} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center w-[100%] mt-5">
        <div className="lanthanideSeries flex">
        {lanthanideSeries.map((element) => (
            <ElementTable key={element.symbol} data={element} />
          ))}
        </div>
        <div className="actinideSeries flex">
        {actinideSeries.map((element) => (
            <ElementTable key={element.symbol} data={element} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-x-2 mt-6 mb-6">
        <Categores category="فلز قلیایی" bgColor="alkaliMetal" />
        <Categores category="قلیایی خاکی" bgColor="alkalineEarth" />
        <Categores category="نا فلز" bgColor="nonMetal" />
        <Categores category="فلز واسطه" bgColor="transltionMetal" />
        <Categores category="فلز پایه" bgColor="basicMetal" />
        <Categores category="نیمه فلز" bgColor="semiMetal" />
        <Categores category="هالوژن" bgColor="halogen" />
        <Categores category="گاز نجیب" bgColor="nobleGas" />
        <Categores category="لانتانید ها" bgColor="lanthanide" />
        <Categores category="آکتینید ها" bgColor="actinide" />
      </div>
    </div>
  );
};

export default BodyTable;
