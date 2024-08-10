import burger from "../public/recipeImages/burger.png";
import blueberry from "../public/recipeImages/blueberry.png";
import Ads from "../public/recipeImages/Ads.png";
import meatballs from "../public/recipeImages/meatballs.png";
import pancake from "../public/recipeImages/pancake.png";
import pasta from "../public/recipeImages/pasta.png";
import rice from "../public/recipeImages/rice.png";
import salad from "../public/recipeImages/salad.png";
import salmon from "../public/recipeImages/salmon.png";

import post1 from "../public/instagramPosts/post1.png";
import post2 from "../public/instagramPosts/post2.png";
import post3 from "../public/instagramPosts/post3.png";
import post4 from "../public/instagramPosts/post4.png";
import { StaticImageData } from "next/image";

export const recipeCardsData = [
  {
    id: 1,
    title: "Big and juicy Wagyu Beef Cheeseburger",
    type: "Snack",
    pic: burger,
  },
  {
    id: 2,
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    type: "Fish",
    pic: salmon,
  },
  {
    id: 3,
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    type: "Breakfast",
    pic: pancake,
  },
  {
    id: 4,
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    type: "Healthy",
    pic: salad,
  },
  {
    id: 5,
    title: "Chicken Meatballs with Cream",
    type: "Meat",
    pic: meatballs,
  },
  {
    id: 6,
    title: "",
    type: "Ad",
    pic: Ads,
  },
  {
    id: 7,
    title: "Fruity Pancake with Orange & Blueberry",
    type: "Sweet",
    pic: blueberry,
  },
  {
    id: 8,
    title: "The Best Easy One Pot Chicken and Rice",
    type: "Snack",
    pic: rice,
  },
  {
    id: 9,
    title: "The Creamiest Creamy Chicken and Bacon Pasta",
    type: "Noodles",
    pic: pasta,
  },
];

export const instaPostData: StaticImageData[] = [post1, post2, post3, post4];
