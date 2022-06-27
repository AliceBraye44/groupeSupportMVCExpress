import React from "react";
// eslint-disable-next-line import/no-unresolved
import "./card.css";

export default function Card({ bird }) {
  return (
    <div className="img-wrapper">
      <img src={bird.img} alt="Atul Prajapati" />
      <h2>{bird.name}</h2>
    </div>
  );
}
