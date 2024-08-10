import { CustomButtonProps } from "@/types";
import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { MdPlayCircleOutline } from "react-icons/md";

export const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  icon,
}: CustomButtonProps) => {
  return (
    <button
      type={"button"}
      className={
        "bg-black text-white flex text-foodieSm items-center gap-1 py-2 px-3 rounded-lg"
      }
      onClick={handleClick}
    >
      <span>{title}</span>
      {icon === "play" && <MdPlayCircleOutline />}
      {icon === "insta" && <FaInstagram />}
    </button>
  );
};
