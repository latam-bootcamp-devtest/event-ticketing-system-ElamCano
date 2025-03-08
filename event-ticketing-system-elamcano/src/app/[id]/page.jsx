"use client";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const url =
  process.env.API_URL || " https://goldfish-app-fbulw.ondigitalocean.app";
const appId = process.env.APP_ID || "69cb39b3-f403-4a23-bb5d-3b282eddd6c4";

const Detail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  useEffect(() => {
    axios
      .get(`${url}/Event/${id}?applicationId=${appId}`)
      .then((response) => setEvent(response.data))
      .catch((err) => console.error(err));
  }, []);

  if (!event) return <div>No event</div>;

  return (
    <section className="flex flex-col items-start p-6 gap-10">
      <Link href={"/"}>
        <button className="cursor-pointer">Go back</button>
      </Link>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row gap-10">
          <div>
            <img
              src={event.image}
              alt={event.name}
              width={600}
              height={600}
              className="rounded-3xl"
            />
          </div>
          <div className="flex flex-col gap-10 text-amber-50 text-3xl">
            <h1>
              <span className="font-bold">Event:</span> {event.name}
            </h1>
            <h3 className="text-xl">
              <span className="font-bold">Date: </span> {event.date}
            </h3>
            <h3 className="text-xl">
              <span className="font-bold">Location: </span> {event.location}
            </h3>
            <h2 className="text-2xl">
              <span className="font-bold">Event description: </span>{" "}
              {event.description}
            </h2>
            <h3 className="text-xl">
              <span className="font-bold">Tickets available: </span>{" "}
              {event.availableTickets}
            </h3>
            <h3 className="text-xl">
              <span className="font-bold">Price: </span> {event.price}
            </h3>
            <button className="w-fit bg-amber-50 text-black rounded-xl p-4 font-bold hover:bg-green-400 duration-300 cursor-pointer text-2xl">
              Book ticket
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
