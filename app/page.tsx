import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import InstaPosts from "@/components/InstaPosts";
import RecipeSection from "@/components/RecipeSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <Categories />
      <RecipeSection />

      <InstaPosts />
    </>
  );
}
