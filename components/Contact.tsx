import React from "react";
import { CustomButton } from "./CustomButton";
import Image from "next/image";
import leaf from "../public/contactImages/leaf.png";
import fruity from "../public/contactImages/fruity.png";
import plate from "../public/contactImages/plate.png";

function Contact() {
  return (
    <section>
      <div className=" relative bg-foodie grid place-items-center p-8 rounded-3xl py-20 gap-12 overflow-hidden h-[30rem]">
        <div className=" text-center">
          <h1 className="font-bold text-foodieLg">
            Deliciousness to your inbox
          </h1>

          <p className="text-foodieSm w-[80%] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            nostrum impedit nemo quia ab. Est quisquam illo nostrum ullam
            voluptatum iure impedit{" "}
          </p>
        </div>
        <div className="">
          <form
            action=""
            className="flex bg-white py-2 px-4 pr-2 rounded-2xl justify-between"
          >
            <input
              className="bg-transparent outline-none border-none "
              placeholder="Your email address..."
              type="text"
            />
            <CustomButton title="Subscribe" />
          </form>
        </div>

        <Image
          className="hidden lg:block absolute left-0 bottom-0"
          src={fruity}
          alt="fruity"
        />
        <Image
          className="hidden absolute  md:block right-[12rem] "
          src={leaf}
          alt="leaf"
        />
        <Image
          className=" md:block  absolute -bottom-[8rem] -right-16 md:right-0  md:bottom-0"
          src={plate}
          alt="plate"
        />
      </div>
    </section>
  );
}

export default Contact;
