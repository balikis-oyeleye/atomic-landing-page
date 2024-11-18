import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Swirl from "../icons/swril.svg?react";
import { FaPlay } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pb-[90px] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-[1280px] mx-auto px-4">
        <div className="flex flex-col justify-center items-center md:items-start">
          <div className="flex items-center gap-2 mb-[42px]">
            <Swirl />
            <h3 className="text-yellow font-inter text-base font-semibold">
              Customer story
            </h3>
          </div>
          <blockquote className="text-primary text-2xl md:text-[32px] font-poppins md:max-w-[613px] leading-tight mb-[35px] text-center md:text-start">
            "Our growth no longer necessitates the recruitment and education of
            additional design professionals"
          </blockquote>
          <a
            href="https://www.framer.com/customers/zapier"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary flex items-center gap-[6px]"
          >
            <span className="font-inter text-lg">Read the story</span>
            <IoArrowForwardCircleOutline size={32} />
          </a>
        </div>
        <div className="md:max-w-[614px] max-h-[430px] mx-auto relative">
          <img
            src="/assets/images/man.png"
            className="rounded-3xl  w-full h-full object-center"
            loading="lazy"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] bg-black/55 flex items-center justify-center rounded-full cursor-pointer">
            <FaPlay size={28} className="text-white" />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
