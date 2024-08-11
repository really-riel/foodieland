import Banner from "@/components/Banner";
import Banner2 from "@/components/Banner2";
import Categories from "@/components/Categories";
import Contact from "@/components/Contact";
import InstaPosts from "@/components/InstaPosts";
import RecipeSection from "@/components/RecipeSection";
import RecipeSection2 from "@/components/RecipeSection2";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <Categories />
      <RecipeSection />
      <Banner2 />
      <InstaPosts />
      <RecipeSection2 />
      <Contact />
    </>
  );
}
