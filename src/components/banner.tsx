import React from "react";
import Shopify from "../icons/shopify.svg?react";
import Pinterest from "../icons/pinterest.svg?react";
import Duolingo from "../icons/duolingo.svg?react";
import M from "../icons/m.svg?react";
import Morgan from "../icons/morgan.svg?react";
import Revolut from "../icons/revolut.svg?react";
import Headspace from "../icons/headspace.svg?react";
import Volvo from "../icons/volvo.svg?react";

const Banner: React.FC = () => {
  const logos = [
    {
      name: "Shopify",
      icon: Shopify,
      size: "min-w-28",
    },
    {
      name: "Pinterest",
      icon: Pinterest,
      size: "min-w-28",
    },
    {
      name: "Duolingo",
      icon: Duolingo,
      size: "min-w-28",
    },
    {
      name: "M",
      icon: M,
      size: "min-w-20",
    },
    {
      name: "Morgan",
      icon: Morgan,
      size: "min-w-28",
    },
    {
      name: "Revolut",
      icon: Revolut,
      size: "min-w-28",
    },
    {
      name: "Headspace",
      icon: Headspace,
      size: "min-w-28",
    },
    {
      name: "Volvo",
      icon: Volvo,
      size: "min-w-20",
    },
  ];

  return (
    <section className="container py-14" aria-labelledby="company-banner">
      <h2 className="font-inter text-[#7D7F78] tracking-tight leading-6 text-center text-xl font-normal">
        Already chosen by the leaders
      </h2>
      <div className="flex items-center mt-8 justify-center">
        <ul className="flex overflow-x-auto gap-6 items-center">
          {logos.map((company, index) => (
            <li key={index} className={`max-h-max ${company.size}`}>
              <company.icon className="w-full h-full object-contain" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Banner;
