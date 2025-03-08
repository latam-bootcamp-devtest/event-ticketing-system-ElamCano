"use client";
import React, { useState } from "react";
import ModalDelete from "./ModalDelete";

const Card = ({ name, date, price, image, event = false, id }) => {
  const [deleteEvent, setDeleteEvent] = useState(false);

  const handleDelete = () => {
    setDeleteEvent(true);
  };

  return (
    <div className="h-[450px] p-16 bg-slate-100 text-black rounded-2xl flex flex-col justify-center items-center gap-6 hover:scale-110 cursor-pointer">
      <h1 className="font-bold 20px">{name}</h1>
      <img src={image} height={200} width={200} alt={name} />
      <h2>
        <span className="font-bold">Date:</span> {date}
      </h2>
      <h3>
        <span className="font-bold">Price:</span> ${price}
      </h3>
      {event && (
        <div className="flex flex-row gap-20">
          <button
            href={"/admin"}
            className="rounded-xl bg-slate-500 p-4 cursor-pointer"
          >
            Edit
          </button>
          <button
            className="rounded-xl bg-red-400 p-4 cursor-pointer z-10"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      )}
      {deleteEvent && <ModalDelete name={name} />}
    </div>
  );
};

export default Card;
