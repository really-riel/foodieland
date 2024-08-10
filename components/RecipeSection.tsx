import Link from "next/link";
import React from "react";

function RecipeSection() {
  return (
    <section>
      <h1>recipe</h1>
      <Link href={"/recipe/1"}>help</Link>
    </section>
  );
}

export default RecipeSection;
