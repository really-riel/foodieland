import React from "react";

import InfoSticker from "./InfoSticker";
import { CustomButton } from "./CustomButton";
import Image from "next/image";
import Bannerimg1 from "../public/bannerImages/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png";
import john from "../public/bannerImages/Ellipse 2.png";
import badge from "../public/bannerImages/Badge.png";
import scroll from "../public/bannerImages/scroll.png";

function Banner() {
  return (
    <section className="w-full px-5 mt-5  ">
      <div className=" flex  w-full  ">
        <div className="hidden lg:block bg-foodie absolute left-0 h-[500px] w-10 rounded-tr-3xl rounded-br-3xl"></div>
        <div className="flex-grow grid lg:grid-cols-2 bg-foodie rounded-3xl overflow-hidden gap-2  ">
          <div className="p-4 py-8 flex flex-col gap-5 justify-between   ">
            <div className=" bg-white w-fit font-bold px-2 py-1 rounded-2xl text-foodieSm flex items-center justify-center gap-1">
              <Image alt="recipe scroll" src={scroll} className="w-[30px]" />
              <p>Hot Recipes</p>
            </div>
            <h1 className="text-[clamp(1.5rem,_2rem_+_1vw,_5rem)] font-bold">
              Spicy delicious <br /> chicken wings
            </h1>
            <p className="text-foodieSm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              facere incidunt obcaecati vel, similique sit magni velit
              consectetur mollitia ipsum in, cum iusto unde quasi aperiam porro
              quidem quod tempore?
            </p>
            <InfoSticker type="" />
            <div className=" flex justify-between items-end mt-auto">
              <div className=" flex items-center text-foodieSm gap-2">
                <Image alt="John" src={john} className="w-9 h-9w-9 bg-cover" />
                <div className=" ">
                  <h3 className="font-bold">John Smith</h3>
                  <p>15 March 2022</p>
                </div>
              </div>
              <CustomButton title="View Recipes" icon="play" />
            </div>
          </div>
          <div className="w-full">
            <div className=" relative">
              <Image
                alt="foodieland"
                className="w-full object-cover h-[400px] lg:h-[500px]"
                src={Bannerimg1}
              />
              <Image
                className="absolute -top-5 left-[50%] right-[50%]  translate-x-[-50%] lg:left-0 lg:top-[10%] lg:w-[150px] "
                alt="badge"
                height={100}
                width={100}
                src={badge}
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:block  bg-foodie absolute right-0 h-[500px] w-10 rounded-tl-3xl rounded-bl-3xl"></div>
      </div>
    </section>
  );
}

export default Banner;
