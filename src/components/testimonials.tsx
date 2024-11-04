import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Swirl from "../icons/swril.svg?react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="container pb-[90px] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div>
            <Swirl />
            <h3>Customer story</h3>
          </div>
          <blockquote>
            "Our growth no longer necessitates the recruitment and education of
            additional design professionals"
          </blockquote>
          <a href="#" className="text-white">
            <span>Read the story</span>
            <IoArrowForwardCircleOutline />
          </a>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Testimonials;
