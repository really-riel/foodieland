import { StaticImageData } from "next/image";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  icon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface RecipeCardProps {
  id: number;
  title: string;
  type: string;
  pic: StaticImageData;
}

export interface CategoriesProp {
  id: number;
  title: string;
  pic: StaticImageData;
  pic2: StaticImageData;
}

export interface ReactionButtonProps {
  isLoved: boolean;
  handleClicked: () => void;
}
