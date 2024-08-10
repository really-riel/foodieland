import React from "react";
import { BiStopwatch } from "react-icons/bi";
import { BsFillStopwatchFill } from "react-icons/bs";
import { PiForkKnifeFill } from "react-icons/pi";

function InfoSticker() {
  return (
    <div className=" flex gap-3  *:py-1 *:px-2 *:rounded-2xl *:bg-black/10 *:gap-1 text-foodieSm ">
      <div className=" flex items-center">
        <BsFillStopwatchFill /> <span className="">30 Minutes</span>
      </div>
      <div className="flex items-center bg-breakfast ">
        <PiForkKnifeFill /> <span>Chicken</span>
      </div>
    </div>
  );
}

export default InfoSticker;
