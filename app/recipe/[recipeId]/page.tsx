import { recipeCardsData } from "@/utils/data";
import React from "react";

type Param = {
  params: {
    recipeId: string;
  };
};

export default function Recipe({ param: { recipeId } }) {
  const recipe = recipeCardsData.find((item) => item.id === recipeId);

  return (
    <section className="bg-red-300">
      <div>{recipe?.pic}</div>
    </section>
  );
}
