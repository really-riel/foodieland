import Image from "next/image";
import React from "react";
import chef from "../public/Chef.png";
import { CustomButton } from "./CustomButton";

function Banner2() {
  return (
    <section className="grid lg:grid-cols-2">
      <div className=" flex flex-col gap-4 justify-center">
        <h1 className="font-bold text-foodieLg">
          Everyone can be a <br />
          chef in their own Kitchen
        </h1>

        <p className="text-foodieSm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, harum
          temporibus. Accusantium nemo suscipit magnam rerum tempora modi,
          labore animi?
        </p>
        <div className="mt-7">
          <CustomButton title="Learn More" />
        </div>
      </div>
      <div className="">
        <Image src={chef} alt="chef" />
      </div>
    </section>
  );
}

export default Banner2;
