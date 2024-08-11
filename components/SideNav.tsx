import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/logo.png";

function SideNav({ setIsSideNavOpen }: any) {
  return (
    <div className="w-full grid grid-cols-[70%_30%] fixed top-0 bottom-0 left-0 right-0">
      <div
        className=" bg-black opacity-50"
        onClick={() => setIsSideNavOpen(false)}
      ></div>
      <div className="bg-foodie">
        <div className="p-4 border-b-2 border-black/25 grid place-content-center">
          <Image alt="foodie-logo" src={logo} width={100} />
        </div>
        <nav>
          <ul className="flex items-center flex-col gap-5 *:p-2">
            <Link href={"/"} onClick={() => setIsSideNavOpen(false)}>
              <li>Home</li>
            </Link>
            <Link href={"/#recipe"} onClick={() => setIsSideNavOpen(false)}>
              <li>Recipes</li>
            </Link>
            <Link href={"/#blog"} onClick={() => setIsSideNavOpen(false)}>
              <li> Blog</li>
            </Link>
            <Link href={"/#contact"} onClick={() => setIsSideNavOpen(false)}>
              <li>Contact</li>
            </Link>
            <Link href={"/#about"} onClick={() => setIsSideNavOpen(false)}>
              <li>About us</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideNav;
