import Swril from "../icons/swril.svg?react";
import Growth from "../icons/growth.svg?react";
import LatestDesign from "../icons/latest-design.svg?react";
import LineGraph from "../icons/line-graph.svg?react";

const Features = () => {
  return (
    <section id="features" className="container pb-[80px]">
      <div className="flex items-center justify-center gap-2">
        <Swril />
        <h2 className="text-[#DDFF00] font-medium font-inter text-lg">
          What you'll get
        </h2>
      </div>
      <p className="bg-custom-gradient-text text-transparent bg-clip-text text-center font-poppins mt-3 text-2xl md:text-3xl xl:text-[44px] tracking-tight max-w-[788px] mx-auto">
        <span className="leading-[120%]">
          We resolve problems associated with creative procedures.
        </span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 max-w-[1280px] mx-auto">
        <div className="w-full bg-custom-box-gradient rounded-[30px] p-10">
          <div className="w-[280px] h-[211px] mx-auto">
            <Growth className="h-full w-full object-contain" />
          </div>
          <div className="mt-6">
            <h3 className="font-poppins text-primary text-[22px]">
              Cost effective solution
            </h3>
            <p className="font-inter text-base text-[#7A7A7A]">
              Get high-quality design work at a fraction of the cost.
            </p>
          </div>
        </div>
        <div className="w-full bg-custom-box-gradient rounded-[30px] p-10">
          <div className="w-[280px] h-[211px] mx-auto">
            <LatestDesign className="h-full w-full object-contain" />
          </div>
          <div className="mt-6">
            <h3 className="font-poppins text-primary text-[22px]">
              Tailor–made design
            </h3>
            <p className="font-inter text-base text-[#7A7A7A]">
              We've got the expertise to make your vision a reality.
            </p>
          </div>
        </div>
        <div className="w-full bg-custom-box-gradient rounded-[30px]">
          <div className="w-[280px] h-[211px] mx-auto">
            <LineGraph className="h-full w-full object-contain" />
          </div>
          <div className="mt-16 px-10 pb-10 md:pb-0">
            <h3 className="font-poppins text-primary text-[22px]">
              Scalable as you grow
            </h3>
            <p className="font-inter text-base text-[#7A7A7A]">
              We’re ready to meet your evolving needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
