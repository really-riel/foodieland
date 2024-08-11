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

import breakfast from "../public/CategoriesImages/breakfast.png";
import vegan from "../public/CategoriesImages/vegan.png";
import chocolate from "../public/CategoriesImages/chocolate.png";
import meat from "../public/CategoriesImages/meat.png";
import dessert from "../public/CategoriesImages/dessert.png";
import lunch from "../public/CategoriesImages/lunch.png";

import breakShadow from "../public/CategoriesImages/breakshadow.png";
import veganShadow from "../public/CategoriesImages/veganShadow.png";
import meatShadow from "../public/CategoriesImages/meatShadow.png";
import dessertShadow from "../public/CategoriesImages/dessertShadow.png";
import lunchShadow from "../public/CategoriesImages/lunchShadow.png";
import chocolateShadow from "../public/CategoriesImages/chocolateShadow.png";

import tropical from "../public/recipeImages/tropical.png";
import wagyu from "../public/recipeImages/wagyu.png";
import japanese from "../public/recipeImages/japanese.png";
import taco from "../public/recipeImages/taco.png";
import rainbow from "../public/recipeImages/rainbow.png";
import chips from "../public/recipeImages/chips.png";
import lettuce from "../public/recipeImages/lettuce.png";
import mushroom from "../public/recipeImages/mushroom.png";

import john from "../public/bannerImages/Ellipse 2.png";
import { BiStopwatch } from "react-icons/bi";
import { time } from "console";

export const recipeCardsDatas = [
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
    type: "Ads",
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

export const recipeCardsDatas2 = [
  {
    id: 1,
    title: "Mixed Tropical Friut Salad with Superfood Boosts",
    type: "Healthy",
    pic: tropical,
  },
  {
    id: 2,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    type: "Western",
    pic: wagyu,
  },
  {
    id: 3,
    title: "Health Japanese Fried Rice with Asparagus",
    type: "Healthy",
    pic: japanese,
  },
  {
    id: 4,
    title: "Cauliflower Walnut Vegetarian Taco Meat",
    type: "Eastern",
    pic: taco,
  },
  {
    id: 5,
    title: "Rainbow Chicken Salad with Almon Honey Mustard Dressing",
    type: "Healthy",
    pic: rainbow,
  },
  {
    id: 6,
    title: "Barbeque spicy Sandwiches with Chips",
    type: "Snack",
    pic: chips,
  },
  {
    id: 7,
    title: "Firecracker vegan Lettuce Wraps - Spicy!",
    type: "Seafood",
    pic: lettuce,
  },
  {
    id: 8,
    title: "Chicken Ramen Soup with Mushroom",
    type: "Snack",
    pic: mushroom,
  },
];

export const instaPostData = [
  { id: 1, pic: post1 },
  { id: 2, pic: post2 },
  { id: 3, pic: post3 },
  { id: 4, pic: post4 },
];

export const categoriesData = [
  {
    id: 1,
    title: "breakfast",
    pic: breakfast,
    pic2: breakShadow,
  },
  {
    id: 2,
    title: "vegan",
    pic: vegan,
    pic2: veganShadow,
  },
  {
    id: 3,
    title: "meat",
    pic: meat,
    pic2: meatShadow,
  },
  {
    id: 4,
    title: "dessert",
    pic: dessert,
    pic2: dessertShadow,
  },
  {
    id: 5,
    title: "lunch",
    pic: lunch,
    pic2: lunchShadow,
  },
  {
    id: 6,
    title: "chocolate",
    pic: chocolate,
    pic2: chocolateShadow,
  },
];

export const NutritionInfo = [
  {
    id: 1,
    type: "Calories",
    value: "219.9Kcal",
  },
  {
    id: 2,
    type: "Total Fat",
    value: "10.7g",
  },
  {
    id: 3,
    type: "Protein",
    value: "7.9g",
  },
  {
    id: 4,
    type: "Carbohydrate",
    value: "22.3g",
  },
  {
    id: 5,
    type: "Cholesterol",
    value: "37.4mg",
  },
];

export const cookDatas = [
  {
    id: 1,
    title: "John Smith",
    pic: john,
    time: "15 March 2022",
  },
  {
    id: 1,
    title: "Prep Time",
    pic: null,
    time: "15 minutes",
  },
  {
    id: 1,
    title: "Cook Time",
    pic: null,
    time: "15minutes",
  },
];

export const otherRecipeDatas = [
  {
    id: 1,
    title: "Chicken Meatball with Creamy Cheese...",
    pic: meatballs,
  },
  {
    id: 1,
    title: "The Creamiest Creamy Chicken an...",
    pic: pasta,
  },
  {
    id: 1,
    title: "The Best Easy One Pot Chicken and rice",
    pic: rice,
  },
];
