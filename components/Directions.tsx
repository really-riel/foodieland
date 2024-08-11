import Image from "next/image";
import React from "react";
import direction from "../public/directions.png";
import { Checkbox } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

function Directions() {
  return (
    <section className="flex flex-col gap-7">
      <h1 className="font-bold text-foodieLg mb-10">Directions</h1>

      <div className=" flex gap-4">
        <div className="">
          <Checkbox
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<CheckCircleIcon />}
          />
        </div>
        <div className="flex flex-col gap-8">
          <p className="font-bold text-2xl">1. Lorem ipsum dolor sit amet</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            corporis iure suscipit tempora ab, dolorum praesentium ratione vel,
            quisquam delectus quidem, rem et voluptates autem omnis eaque unde
            placeat voluptatibus.
          </p>
          <Image alt="cooking" src={direction} className="w-full" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            corporis similique quasi eaque recusandae ad. Necessitatibus,
            fugiat, corporis natus cumque eaque magni obcaecati nam illo nostrum
            a aliquid. Ipsum, excepturi.
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="">
          <Checkbox
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<CheckCircleIcon />}
          />
        </div>
        <div className="flex flex-col gap-8">
          <p className="font-bold text-2xl">2. Lorem ipsum dolor sit amet</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quos
            corporis quidem magnam ipsum delectus ea ducimus, suscipit minima
            nisi autem repellat nostrum at eligendi expedita unde ab nihil
            voluptas.
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="">
          <Checkbox
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<CheckCircleIcon />}
          />
        </div>
        <div className="flex flex-col gap-8">
          <p className="font-bold text-2xl">3. Lorem ipsum dolor sit amet</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            dolor autem commodi earum minima sint iste doloremque est molestias
            cum, vero quisquam reiciendis officiis eius perferendis assumenda
            architecto, necessitatibus inventore.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Directions;
