"use client";
import Image from "next/image";
import React, { useState } from "react";
import NavBar from "./NavBar";
import logo from "../public/logo.png";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import SideNav from "./SideNav";

function Header() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  return (
    <header className="sticky top-0 flex justify-between lg:justify-start py-4 items-center z-30 bg-white border-b-[1px] w-[95%] max-w-[1200px] border-black/10">
      <Link href={"/"} className="flex-1">
        <div>
          <Image alt="logo" src={logo} width={100} height={30} />
        </div>
      </Link>
      <GiHamburgerMenu
        className="lg:hidden cursor-pointer text-2xl "
        onClick={() => setIsSideNavOpen(!isSideNavOpen)}
      />

      <NavBar />
      {isSideNavOpen && <SideNav setIsSideNavOpen={setIsSideNavOpen} />}
    </header>
  );
}

export default Header;
