import { otherRecipeDatas } from "@/utils/data";
import Image from "next/image";
import React from "react";
import ads from "../public/recipeImages/Ads.png";
import { Checkbox } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

function Ingredients() {
  const mainDishCount = [1, 2, 3, 4];
  const sauceCount = [1, 2, 3];

  return (
    <section className="grid lg:grid-cols-[60%,_40%] gap-7">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-foodieLg">Ingredients</h1>
        <div className="">
          <p className="font-bold">For main dish</p>
          {mainDishCount.map((item) => (
            <div
              className=" flex gap-4 items-center border-b-2 border-black/10 py-4"
              key={item}
            >
              <div className="">
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                />
              </div>
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </div>
          ))}
        </div>
        <div className="">
          <p className="font-bold">For the sauce</p>
          {sauceCount.map((item) => (
            <div
              className=" flex gap-4 items-center border-b-2 border-black/10 py-4"
              key={item}
            >
              <div className="">
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                />
              </div>
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-7">
        <h1 className="font-bold text-foodieLg">Other Recipe</h1>
        <div className=" flex flex-col gap-5">
          {otherRecipeDatas.map((item) => (
            <div className=" flex items-center gap-5" key={item.id}>
              <Image
                className="rounded-3xl"
                src={item.pic}
                alt={item.title}
                width={200}
                height={150}
              />

              <div className="grid gap-4">
                <h2 className="font-bold text-xl">{item.title}</h2>
                <p>By Andreas Paula</p>
              </div>
            </div>
          ))}
        </div>
        <div className=" mx-auto">
          <Image src={ads} alt="ads" className="w-full max-w-[400px]" />
        </div>
      </div>
    </section>
  );
}

export default Ingredients;
