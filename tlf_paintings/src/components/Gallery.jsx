import GalleryCard from "./GalleryCard";
import "../styles/Banner.css";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

function Gallery() {
  const imageList = [project1, project2, project3, project4];
  return (
    <section id="gallery" aria-label="Project gallery">
      <h2 className="text-center text-white mb-5 font-bold max-md:text-2xl md:text-4xl">
        Gallery
      </h2>
      <p className="text-center text-white mb-8 sr-only">
        Explore our completed painting projects and see the quality of our work.
      </p>

      <div className="container-fluid">
        <ul
          className="grid gap-6 sm:grid-cols-1 p-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          role="list"
        >
          {imageList.map((src, index) => (
            <li key={index} role="listitem">
              <GalleryCard src={src} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Gallery;
