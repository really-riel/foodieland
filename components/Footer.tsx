import Image from "next/image";
import React from "react";
import logo from "../public/logo.png";

import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { PiInstagramLogo } from "react-icons/pi";

function Footer() {
  return (
    <footer className="mt-8 w-[95%] max-w-[1200px] py-5">
      <div className=" flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:mb-12">
        <div className=" flex flex-col gap-3">
          <Image className="w-32" alt="foodieland" src={logo} />

          <p className="text-foodieSm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            atque vero a{" "}
          </p>
        </div>
        <div className="">
          <ul className="flex *:font-semibold justify-around lg:gap-4 ">
            <li>Recipes </li>
            <li>Blog </li>
            <li>Contact </li>
            <li>About us </li>
          </ul>
        </div>
      </div>
      <div className="border-t-2 border-black/15 flex flex-col-reverse lg:flex-row gap-3 pt-4">
        <p className="grow grid place-items-center w-full">
          &copy; 2020 Flowbase. Poweredby
          <span className="text-orange-400">Webflow</span>
        </p>

        <ul className="flex gap-4">
          <li>
            <FaFacebookF />
          </li>
          <li>
            <BsTwitter />
          </li>
          <li>
            <PiInstagramLogo />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
