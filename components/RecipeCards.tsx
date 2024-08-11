"use client";
import { RecipeCardProps } from "@/types";
import React, { useState } from "react";
import InfoSticker from "./InfoSticker";
import Image from "next/image";
import ReactionButton from "./ReactionButton";
import Link from "next/link";

interface props {
  data: RecipeCardProps;
  isRecipe2: boolean;
}

function RecipeCards({ data, isRecipe2 }: props) {
  const [isLoved, setIsloved] = useState(false);

  const handleClicked = () => setIsloved(!isLoved);

  return (
    <>
      {data.type === "Ads" ? (
        <div className="max-h-[350px]">
          <Image className="h-full" src={data.pic} alt={data.title} />
        </div>
      ) : (
        <div
          className={`flex flex-col gap-2 justify-between ${
            isRecipe2 ? "lg:h-[300px] " : "foodieFade"
          }  w-full max-w-[400px]  px-3 py-2 pb-4 rounded-2xl     `}
        >
          <div className=" relative md:min-w-full   ">
            <Link href={`/recipe/${data.id}`}>
              <Image
                className={`rounded-2xl  w-full object-cover    ${
                  isRecipe2 ? " max-h-[250px] " : ""
                }`}
                src={data.pic}
                alt={data.title}
              />
            </Link>
            <ReactionButton isLoved={isLoved} handleClicked={handleClicked} />
          </div>
          <Link href={`recipe/${data.id}`}>
            <div className=" font-bold w-[80%]">
              <p>{data.title}</p>
            </div>
          </Link>
          <div className="">
            <InfoSticker type={data.type} />
          </div>
        </div>
      )}
    </>
  );
}

export default RecipeCards;
