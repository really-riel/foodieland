import Link from "next/link";
import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

function NavBar() {
  return (
    <nav className="hidden lg:flex gap-5 justify-between  grow">
      <ul className="flex items-center gap-5 font-bold">
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
      <ul className="flex items-center gap-3">
        <li>
          <FaFacebook />
        </li>
        <li>
          <BsTwitter />
        </li>
        <li>
          <BsInstagram />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
