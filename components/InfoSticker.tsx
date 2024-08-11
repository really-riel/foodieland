import React from "react";

import { BsFillStopwatchFill } from "react-icons/bs";
import { PiForkKnifeFill } from "react-icons/pi";

interface InfoStickerProps {
  type: string;
}

function InfoSticker({ type }: InfoStickerProps) {
  return (
    <div
      className={` flex gap-3  *:py-1 *:px-2 *:rounded-2xl ${
        type ? "" : "*:bg-black/10"
      }  *:gap-1 text-foodieSm `}
    >
      <div className=" flex items-center">
        <BsFillStopwatchFill /> <span className="">30 Minutes</span>
      </div>
      <div className="flex items-center  ">
        <PiForkKnifeFill /> <span>{type ? type : "Chicken"}</span>
      </div>
    </div>
  );
}

export default InfoSticker;
