import "../styles/Banner.css";

function Banner() {
  return (
    <section id="banner" className="mt-[65px]" aria-label="Welcome banner">
      <div
        className="w-full max-sm:h-[150px] sm:h-[350px] banner"
        role="img"
        aria-label="Professional painting services - Transform your space"
      >
        <h1 className="sr-only">Professional Painting Services</h1>
      </div>
    </section>
  );
}

export default Banner;
