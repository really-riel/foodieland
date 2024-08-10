import Link from "next/link";
import React from "react";

function SideNav({ setIsSideNavOpen }: any) {
  return (
    <div className="w-full grid grid-cols-[70%_30%] fixed top-0 bottom-0">
      <div
        className=" bg-black opacity-15"
        onClick={() => setIsSideNavOpen(false)}
      ></div>
      <div className="bg-foodie">
        <nav>
          <ul className="flex items-center gap-5">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/"}>
              <li>Recipes</li>
            </Link>
            <Link href={"/"}>
              <li> Blog</li>
            </Link>
            <Link href={"/"}>
              <li>Contact</li>
            </Link>
            <Link href={"/"}>
              <li>About us</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideNav;
