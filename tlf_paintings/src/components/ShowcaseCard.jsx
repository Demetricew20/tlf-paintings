import React from "react";
import testPhoto from "../assets/stock-paint.jpg";

function ShowcaseCard() {
  return (
    <>
      <div className="card w-[18rem]">
        <img src={testPhoto} className="card-img-top" alt="painter" />
        <div className="card-body">
          <h5 className="card-title">Picture of Work</h5>
          <p className="card-text">
            Use pictures to showcase work that was completed
          </p>
          <a href="#" className="btn btn-primary">
            View Project
          </a>
        </div>
      </div>
    </>
  );
}

export default ShowcaseCard;
