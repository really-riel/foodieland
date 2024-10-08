import React from "react";

import { categoriesData } from "@/utils/data";
import { CategoriesProp } from "@/types";
import Image from "next/image";

function Categories() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Categories</h1>

        <div className="text-sm font-bold bg-foodie py-2 px-3 rounded-xl">
          <p>View All Categories</p>
        </div>
      </div>
      <div className=" flex gap-3 justify-between overflow-auto py-3">
        {categoriesData?.map((item: CategoriesProp) => (
          <div
            className={`${item.title}  bg-opacity-5     rounded-2xl grid place-items-center p-6 min-w-[120px] gap-5`}
            key={item.id}
          >
            <div className="relative">
              <Image
                className=""
                alt={item.title}
                src={item.pic}
                loading="lazy"
                height={70}
              />
              <Image
                className="absolute top-5 left-"
                src={item.pic2}
                alt="shadow"
                height={70}
              />
            </div>

            <p className="font-bold text-sm">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
