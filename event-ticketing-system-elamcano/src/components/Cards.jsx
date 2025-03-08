"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const url =
  process.env.API_URL || " https://goldfish-app-fbulw.ondigitalocean.app";
const appId = process.env.APP_ID || "69cb39b3-f403-4a23-bb5d-3b282eddd6c4";

const Cards = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get(`${url}/Event?applicationId=${appId}`)
      .then((response) => setEvents(response.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className=" p-4 rounded-xl flex flex-row justify-around">
      {events?.map((event, index) => (
        <Card
          name={event.name}
          date={event.date}
          price={event.price}
          image={event.image}
          key={index}
        />
      ))}
    </div>
  );
};

export default Cards;
