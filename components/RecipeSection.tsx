import { RecipeCardProps } from "@/types";
import { recipeCardsDatas } from "@/utils/data";

import React from "react";
import RecipeCards from "./RecipeCards";

function RecipeSection() {
  return (
    <section className="flex flex-col gap-4 scroll-mt-14" id="recipe">
      <div className=" text-center ">
        <h1 className="text-2xl font-bold mb-3">Simple and tasty recipes</h1>
        <p className="text-foodieSm  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem
          perferendis <br /> et voluptate molestias unde rerum ea similique
          nihil,
        </p>
      </div>

      <div className=" grid gap-8 md:grid-cols-2 lg:grid-cols-3 place-content-center ">
        {recipeCardsDatas.slice(0, 9).map((data: RecipeCardProps) => (
          <RecipeCards key={data.id} data={data} isRecipe2={false} />
        ))}
      </div>
    </section>
  );
}

export default RecipeSection;
