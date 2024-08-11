import { instaPostData } from "@/utils/data";
import Image from "next/image";
import React from "react";
import { CustomButton } from "./CustomButton";

function InstaPosts() {
  return (
    <section className="flex flex-col gap-8" id="about">
      <div className="text-center">
        <h2 className="text-foodieLg font-bold">
          Check out @foodieland on Instagram
        </h2>
        <p className="text-foodieSm w-[70%] m-auto my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nulla,
          enim in commodi cupiditate ipsa, tempore nostrum minus repellendus
          voluptate praesentium ipsam
        </p>
      </div>

      <div className="bg-gradient-to-t from-[#E7F9FD] py-8 flex flex-col gap-5 rounded-2xl ">
        <div className=" flex flex-wrap items-center justify-center gap-5  lg:grid-cols-4 lg:grid px-5">
          {instaPostData.map((data) => (
            <div className="" key={data.id}>
              <Image alt="posts" src={data.pic} />
            </div>
          ))}
        </div>
        <div className=" grid place-content-center my-5">
          <CustomButton title="Visit our Instagram" icon={"insta"} />
        </div>
      </div>
    </section>
  );
}

export default InstaPosts;
