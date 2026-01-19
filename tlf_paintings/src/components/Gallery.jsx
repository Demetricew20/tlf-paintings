import GalleryCard from "./GalleryCard";
import "../styles/Banner.css";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

function Gallery() {
  const imageList = [project1, project2, project3, project4];
  return (
    <>
      <section id="gallery">
        <h2 className="text-center text-white mb-5 font-bold max-md:text-2xl md:text-4xl">
          Gallery
        </h2>

        <div className="container-fluid">
          {/* Responsive Grid */}
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {imageList.map((src, index) => (
              <GalleryCard key={index} src={src} />
            ))}
          </div>
        </div>

        {/* TODO: ADD THIS AREA WHEN WE HAVE MORE PHOTOS */}
        {/* <div className="container mt-7 text-white">
          <div className="flex flex-col justify-center items-center mt-5">
            <span>Interested in our past projects?</span>
            <button className="mt-2">VIEW GALLERY</button>
          </div>
        </div> */}
      </section>
    </>
  );
}

export default Gallery;
