import React from "react";

function GalleryCard({ src, index }) {
  return (
    <article className="card">
      <figure>
        <img
          src={src}
          className="card-img-top"
          alt={`Completed painting project ${index + 1}`}
          loading="lazy"
        />
        <figcaption className="card-body">
          <h3 className="card-title">{`Project ${index + 1}`}</h3>
        </figcaption>
      </figure>
    </article>
  );
}

export default GalleryCard;
