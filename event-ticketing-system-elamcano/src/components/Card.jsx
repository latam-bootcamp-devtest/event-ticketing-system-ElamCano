import Image from "next/image";
import React from "react";

const Card = ({ name, date, price, image }) => {
  return (
    <div className="p-16 bg-slate-100 text-black rounded-2xl flex flex-col justify-center items-center gap-6 hover:scale-110 cursor-pointer">
      <h1 className="font-bold 20px">{name}</h1>
      <img src={image} height={200} width={200} alt={name} />
      <h2>
        <span className="font-bold">Date:</span> {date}
      </h2>
      <h3>
        <span className="font-bold">Price:</span> ${price}
      </h3>
    </div>
  );
};

export default Card;
