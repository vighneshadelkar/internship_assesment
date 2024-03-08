import React from "react";
import image from "../images/image1.png";
import "../styles/Card1.css";

export default function Card1(data) {
    console.log(data)
  return (
    <div className="cardContainer" key={data.id}>
      <div className="cardWrapper">
        <div className="col1">
          <img src={image} alt="img" />
          <article className="title">title</article>
        </div>
        <div className="col2">
          <span className="card1Title">
            <p>
              {data.title}
            </p>
          </span>
          <p>Main highlights</p>
          <p className="seeMore">See more </p>
        </div>

        <div className="col3">
          <div className="ratingBox">
            <p className="rating">{data.rating}</p>
            <p className="ratingTitle">{data.ratingTitle}</p>
          </div>
          <div className="button">
            <button className="view">View</button>
          </div>
        </div>
      </div>
    </div>
  );
}
