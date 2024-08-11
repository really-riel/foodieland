import { recipeCardsDatas } from "@/utils/data";
import React from "react";
import RecipeCards from "./RecipeCards";

interface YouMayLikeProps {
  id: number;
}

function YouMayLike({ id }: YouMayLikeProps) {
  const FilteredItems = recipeCardsDatas
    .filter((data) => {
      return data.id !== id;
    })
    .slice(13, 17);

  console.log(FilteredItems);
  console.log(id);

  return (
    <section className="flex flex-col gap-16 ">
      <h1 className="font-bold text-foodieLg text-center">
        You may like these recipe too
      </h1>
      <div className=" grid place-content-center gap-8  md:grid-cols-2 lg:grid-cols-4">
        {FilteredItems.map((item) => (
          <div className="" key={item.id}>
            <RecipeCards data={item} isRecipe2={true} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default YouMayLike;
