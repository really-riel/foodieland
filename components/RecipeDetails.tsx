import { RecipeCardProps } from "@/types";
import { NutritionInfo, cookDatas } from "@/utils/data";
import Image from "next/image";
import React from "react";
import { BiStopwatch } from "react-icons/bi";
import { BsFillStopwatchFill } from "react-icons/bs";
import { FiPrinter } from "react-icons/fi";
import { LuShare } from "react-icons/lu";
import { PiForkKnifeFill } from "react-icons/pi";

interface RecipeDetailsProps {
  recipe: RecipeCardProps;
}

function RecipeDetails({ recipe }: RecipeDetailsProps) {
  return (
    <section className="flex flex-col gap-7">
      <div className=" md:flex md:items-center md:justify-between ">
        <div className="">
          <h1 className="text-foodieXlg">{recipe?.title}</h1>
          <div className=" flex items-center gap-4 ">
            {cookDatas.map((data) => (
              <div
                className=" flex items-center text-[clamp(0.2rem,_0.3rem_+_0.5vw,_1rem)] gap-2 border-l-[1px] border-black/15 p-3 first:border-l-0"
                key={data.id}
              >
                {data.pic !== null ? (
                  <Image
                    alt="John"
                    src={data.pic}
                    className="w-6 h-6 bg-cover"
                  />
                ) : (
                  <BsFillStopwatchFill size={15} />
                )}

                <div className=" ">
                  <h3 className="font-bold">{data.title}</h3>
                  <p>{data.time}</p>
                </div>
              </div>
            ))}
            <div className="text-[clamp(0.2rem,_0.3rem_+_0.5vw,_1rem)] flex items-center border-l-[1px] border-black/15 p-3">
              <PiForkKnifeFill size={20} />
              <p>Chicken</p>
            </div>
          </div>
        </div>

        <div className=" flex gap-4">
          <div className=" flex flex-col items-center">
            <div className=" bg-foodie w-[48px] h-[48px] rounded-[50%] grid place-content-center">
              <FiPrinter />
            </div>
            <p className="font-bold text-foodieSm">PRINT</p>
          </div>
          <div className=" flex flex-col items-center">
            <div className="bg-foodie w-[48px] h-[48px] rounded-[50%] grid place-content-center">
              <LuShare />
            </div>
            <p className="font-bold text-foodieSm">SHARE</p>
          </div>
        </div>
      </div>
      <div className=""></div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="">
          <Image alt={recipe.title} src={recipe.pic} />
        </div>
        <div className=" bg-foodie px-2 py-5 rounded-2xl">
          <h2 className="font-bold mb-3">Nutrition information</h2>
          <div className="flex flex-col gap-4">
            {NutritionInfo.map((info, index) => (
              <div
                className=" border-black/15 border-b-2 pb-2 flex justify-between"
                key={index}
              >
                <p>{info.type}</p>
                <p>{info.value}</p>
              </div>
            ))}
          </div>

          <p className="text-foodieSm text-center mt-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing <br /> elit.
            Asperiores, veniam at. Sunt molestiae{" "}
          </p>
        </div>
      </div>
      <p className="text-foodieSm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non soluta,
        quos corrupti qui repellat tempora veritatis alias explicabo architecto
        rem impedit blanditiis quia error veniam molestiae. Deleniti incidunt
        temporibus necessitatibus.
      </p>
    </section>
  );
}

export default RecipeDetails;
