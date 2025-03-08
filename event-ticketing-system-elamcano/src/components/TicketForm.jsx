"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const applicationId = "69cb39b3-f403-4a23-bb5d-3b282eddd6c4";
const url =
  process.env.API_URL || " https://goldfish-app-fbulw.ondigitalocean.app";
const appId = "69cb39b3-f403-4a23-bb5d-3b282eddd6c4";
const userId = "beb79a8e-4aa3-444e-966d-d9827e47bda1";

const TicketForm = ({ price, id }) => {
  const [tickets, setTickets] = useState(0);
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {}, [tickets]);

  const handleTickets = (e) => {
    e.preventDefault();
    setTickets(e.target.value);
  };
  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTicket = {
      applicationId: applicationId,

      userId: userId,
      eventId: id,
      ticketQuantity: tickets,
      customerName: name,
    };

    axios
      .post(`${url}/Booking`, newTicket, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        setSuccess(true);
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        value={name}
        className="bg-sky-50 border-slate-800 rounded-xl text-black"
        onChange={handleName}
      />
      <input
        type="number"
        onChange={handleTickets}
        min={0}
        className="bg-sky-50 border-slate-800 rounded-xl text-black"
      />
      <p>Total price: ${price * tickets}</p>
      {tickets > 10 ? (
        <button
          type="submit"
          className={`${
            tickets > 10 ? `cursor-not-allowed bg-gray-400` : "cursor-pointer"
          } w-fit bg-amber-50 text-black rounded-xl p-4 font-bold hover:bg-green-400 duration-300 text-2xl self-center`}
          disabled
        >
          Book Now!
        </button>
      ) : (
        <button
          type="submit"
          className={` w-fit bg-amber-50 text-black rounded-xl p-4 font-bold hover:bg-green-400 duration-300 text-2xl self-center`}
        >
          Book Now!
        </button>
      )}
      {success && (
        <div className="font-medium font-xl self-center text-green-400">
          Tickets booked successfully!
        </div>
      )}
    </form>
  );
};

export default TicketForm;
