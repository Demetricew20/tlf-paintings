import { PaintBrushIcon, HomeModernIcon } from "@heroicons/react/24/outline";

function Services() {
  const services = [
    {
      title: "Interior Painting",
      icon: <PaintBrushIcon className="w-10 h-10 text-secondary-blue" />,
      description:
        "Transform your home with clean, beautiful finishes designed to last.",
      items: [
        "Walls and ceilings",
        "Trim, baseboards, and molding",
        "Doors, cabinets, and built-ins",
        "Accent walls and decorative finishes",
        "Drywall repair and patching",
        "Texture matching and refinishing",
        "Popcorn ceiling removal",
        "Stain and odor sealing",
      ],
    },
    {
      title: "Exterior Painting",
      icon: <HomeModernIcon className="w-10 h-10 text-secondary-blue" />,
      description:
        "Protect and refresh your home’s exterior with durable, weather‑ready coatings.",
      items: [
        "Full exterior house painting",
        "Siding, stucco, brick, and wood surfaces",
        "Exterior trim, fascia, and doors",
        "Deck and fence painting or staining",
        "Garage door painting",
        "Caulking, sealing, and weatherproofing",
      ],
    },
  ];

  return (
    <>
      <section id="services" className="off-section">
        <h2 className="text-center mb-5 font-bold max-md:text-2xl md:text-4xl">
          Services We Offer
        </h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-white"
            >
              <div className="flex items-center gap-4 mb-4">
                {service.icon}
                <h2 className="text-2xl font-semibold text-gray-800">
                  {service.title}
                </h2>
              </div>

              <p className="text-gray-600 mb-4">{service.description}</p>

              <ul className="space-y-2 text-gray-700">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-teal-600">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
