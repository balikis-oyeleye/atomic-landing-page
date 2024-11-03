import React from "react";

const Banner: React.FC = () => {
  const companiesLogos = [
    {
      name: "pinterest",
      img: "/assets/images/pinterest.png",
    },
    {
      name: "duolingo",
      img: "/assets/images/duolingo.png",
    },
    {
      name: "m",
      img: "/assets/images/m.png",
    },
    {
      name: "morgan",
      img: "/assets/images/morgan.png",
    },
    {
      name: "revolut",
      img: "/assets/images/revolut.png",
    },
    {
      name: "headspace",
      img: "/assets/images/headspace.png",
    },
    {
      name: "shopify",
      img: "/assets/images/shopify.png",
    },
    {
      name: "volvo",
      img: "/assets/images/volvo.png",
    },
  ];

  return (
    <section className="container py-14" aria-labelledby="company-banner">
      <h2 className="font-inter text-[#7D7F78] tracking-tight leading-6 text-center text-xl font-normal">
        Already chosen by the leaders
      </h2>
      <div className="flex gap-4 items-center mt-8 justify-center">
        <div className="flex overflow-x-auto gap-6">
          {companiesLogos.map((company, index) => (
            <figure
              key={index}
              className="min-w-[160px] h-auto m-auto"
              role="listitem"
            >
              <img
                src={company.img}
                alt={`${company.name} logo`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
              <figcaption className="sr-only">{company.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
