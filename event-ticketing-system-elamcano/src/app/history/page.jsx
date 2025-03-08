"use client";
import Card from "@/components/Card";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const url = "https://goldfish-app-fbulw.ondigitalocean.app/User";
const appId = "69cb39b3-f403-4a23-bb5d-3b282eddd6c4";
const userId = "beb79a8e-4aa3-444e-966d-d9827e47bda1";

const History = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/${userId}/Events?applicationId=${appId}`)
      .then((response) => setEvents(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col gap-6 p-6">
      <Link href={"/"}>
        <button className="cursor-pointer">Go back</button>
      </Link>{" "}
      <div className="flex flex-row flex-wrap gap-4">
        {events.length ? (
          events.map((event, index) => (
            <Card
              date={event.date}
              name={event.name}
              image={event.image}
              price={event.price}
              key={index}
            />
          ))
        ) : (
          <div className="font-bold text-2xl self-center text-white">
            No past bookings here.
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
