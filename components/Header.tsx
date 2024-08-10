"use client";
import Image from "next/image";
import React, { useState } from "react";
import NavBar from "./NavBar";
import logo from "../public/logo.png";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  return (
    <header className="sticky top-0 flex justify-between px-10 py-4 items-center z-30 bg-white">
      <Link href={"/"}>
        <div>
          <Image alt="logo" src={logo} width={100} height={30} />
        </div>
      </Link>
      <GiHamburgerMenu
        className="lg:hidden "
        onClick={() => setIsSideNavOpen(!isSideNavOpen)}
      />
      {isSideNavOpen && <NavBar setIsSideNavOpen={setIsSideNavOpen} />}
    </header>
  );
}

export default Header;
