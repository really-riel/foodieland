"use client";
import Contact from "@/components/Contact";
import Directions from "@/components/Directions";
import Ingredients from "@/components/Ingredients";
import RecipeDetails from "@/components/RecipeDetails";
import YouMayLike from "@/components/YouMayLike";
import { recipeCardsDatas } from "@/utils/data";
import React from "react";

type Param = {
  params: {
    recipeId: number;
  };
};

export default function Recipe({ params: { recipeId } }: Param) {
  const recipe = recipeCardsDatas.find((item) => {
    return item.id == recipeId;
  });

  if (!recipe) {
    return <p>Recipe not found</p>;
  }
  console.log(recipe);

  return (
    <>
      {" "}
      <RecipeDetails recipe={recipe} />
      <Ingredients />
      <Directions />
      <Contact />
      <YouMayLike id={recipeId} />
    </>
  );
}
