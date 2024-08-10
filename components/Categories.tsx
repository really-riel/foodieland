import React from "react";
import CategoryCard from "./CategoryCard";
import { categoriesData } from "@/utils/data";
import { CategoriesProp } from "@/types";

function Categories() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Categories</h1>

        <div className="text-sm font-bold bg-foodie py-2 px-3 rounded-xl">
          <p>View All Categories</p>
        </div>

        {categoriesData?.map((item: CategoriesProp) => (
          <div className="" key={item.id}>
            <Image alt={item.title} src={item.pic} />

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
