import { recipeCardsDatas2 } from "@/utils/data";
import React from "react";
import RecipeCards from "./RecipeCards";
import { RecipeCardProps } from "@/types";

function RecipeSection2() {
  return (
    <section className="flex flex-col gap-9">
      <div className=" flex gap-5 flex-col md:flex-row md:justify-between">
        <h1 className="text-foodieLg font-bold">
          Try this delicious recipe to make your day
        </h1>
        <p className="text-foodieSm  w-[80%] mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
          adipisci similique ipsa voluptate, fugiat doloribus ad, impedit quis
          et
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 place-content-center">
        {recipeCardsDatas2.map((data: RecipeCardProps) => (
          <RecipeCards key={data.id} data={data} isRecipe2={true} />
        ))}
      </div>
    </section>
  );
}

export default RecipeSection2;
