import React from "react";
import testPhoto from "../assets/stock-paint.jpg";

function GalleryCard({ src, index }) {
  return (
    <>
      <div className="card">
        <img src={src} className="card-img-top" alt={`Project ${index + 1}`} />
        <div className="card-body">
          {/* TODO: ADD THIS WHEN WE HAVE DESCRIPTIONS */}
          {/* <h5 className="card-title">Picture of Work</h5>
          <p className="card-text">
            Use pictures to showcase work that was completed
          </p>
          <a href="#" className="btn btn-primary">
            View Project
          </a> */}
        </div>
      </div>
    </>
  );
}

export default GalleryCard;
