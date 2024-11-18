import Swril from "../icons/swril.svg?react";
import Growth from "../icons/growth.svg?react";
import LatestDesign from "../icons/latest-design.svg?react";
import LineGraph from "../icons/line-graph.svg?react";
import SocialMedia from "../icons/social-media.svg?react";
import EliahIcon from "../icons/eliah.svg?react";

const Features = () => {
  const avatars = [
    {
      position: "last",
      image: null,
      color: "#343434",
    },
    {
      position: "third",
      image: "/assets/images/third.jpg",
      color: "#DDFF00",
    },
    {
      position: "second",
      image: "/assets/images/second.jpg",
      color: "#00D1FF",
    },
    {
      position: "first",
      image: "/assets/images/first.jpg",
      color: "#7F00FF",
    },
  ];

  const tabs = [
    "Design workshops",
    "Workshops",
    "Trend reports",
    "Premium designers",
    "Multilingual support",
  ];

  return (
    <section id="features" className="container pb-[90px] overflow-hidden">
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
        {/*  */}
        <div className="w-full bg-custom-box-gradient rounded-[30px] pt-2 pb-6  border border-[#262626] overflow-hidden">
          <div className="xs:w-[280px] h-[211px] mx-auto px-2">
            <Growth className="h-full w-full object-cover" />
          </div>
          <div className="mt-6 px-4 sm:px-10">
            <h3 className="font-poppins text-primary text-[22px]">
              Cost effective solution
            </h3>
            <p className="font-inter text-base text-[#7A7A7A]">
              Get high-quality design work at a fraction of the cost.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="w-full bg-custom-box-gradient rounded-[30px] pt-2 pb-6   border  border-[#262626] overflow-hidden">
          <div className="xs:w-[280px] h-[211px] mx-auto px-2">
            <LatestDesign className="h-full w-full object-contain" />
          </div>
          <div className="mt-6 px-4 sm:px-10">
            <h3 className="font-poppins text-primary text-[22px]">
              Tailor–made design
            </h3>
            <p className="font-inter text-base text-[#7A7A7A]">
              We've got the expertise to make your vision a reality.
            </p>
          </div>
        </div>
        <div className="w-full bg-custom-box-gradient rounded-[30px] border border-[#262626] overflow-hidden">
          <div className="w-[280px] h-[211px] mx-auto">
            <LineGraph className="h-full w-full object-contain" />
          </div>
          <div className="mt-16 px-4 sm:px-10 pb-10 md:pb-0">
            <h3 className="font-poppins text-primary text-[22px]">
              Scalable as you grow
            </h3>
            <p className="font-inter text-base text-[#7A7A7A]">
              We’re ready to meet your evolving needs.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-[60px] max-w-[1280px] mx-auto">
        <div className="w-full bg-custom-box-gradient rounded-[30px] pt-2 pb-6  sm:p-10 pr-0 xl:flex xl:flex-row-reverse xl:items-center border  border-[#262626]">
          <div className="h-[173px] xs:w-[282px] xs:ml-auto xs:min-w-max">
            <SocialMedia className="h-full w-full object-contain" />
          </div>
          <div className="mt-16 md:mt-6 xl:max-w-[224px] px-4 sm:px-0">
            <h3 className="font-poppins text-primary text-[22px] xl:text-[26px] max-w-[180px] md:max-w-full ">
              Workflow integration
            </h3>
            <p className="font-inter text-base text-[#7A7A7A] xl:text-[18px]">
              Seamlessly connect all your existing apps.
            </p>
          </div>
        </div>
        <div className="w-full bg-custom-box-gradient rounded-[30px] pb-4 sm:p-10 pr-0 xl:pr-10 xl:flex xl:flex-row-reverse xl:items-center xl:gap-10 border  border-[#262626]">
          <div className="flex-1 h-[173px] xl:h-max p-10 sm:p-0">
            <ul className="flex items-center flex-row-reverse w-max relative">
              {avatars.map((avatar) => (
                <li
                  key={avatar.position}
                  className="-ml-6 rounded-full  overflow-hidden relative p-[5px]"
                  style={{ backgroundColor: avatar.color }}
                >
                  <div className="h-[68px] w-[68px] rounded-full overflow-hidden  border-[#1c1c1c] border">
                    {avatar.image ? (
                      <img
                        src={avatar.image}
                        alt={`${avatar.position} avatar`}
                        className="object-cover h-full w-full"
                        loading="lazy"
                      />
                    ) : (
                      <div />
                    )}
                  </div>
                </li>
              ))}
              <EliahIcon className="absolute -bottom-28 -right-20" />
            </ul>
          </div>
          <div className="md:mt-6 xl:max-w-[224px] px-4 sm:px-0">
            <h3 className="font-poppins text-primary text-[22px] xl:text-[26px] max-w-[180px] md:max-w-full ">
              Collaborate real-time
            </h3>
            <p className="font-inter text-base text-[#7A7A7A] xl:text-[18px]">
              Seamlessly connect all your existing apps.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto mt-8 hidden md:block">
        <ul className="flex items-center flex-wrap justify-center gap-6">
          {tabs.map((tab) => (
            <li
              key={tab}
              className="min-w-[210px] max-w-[210px] h-[57px] justify-center
               gap-2 bg-[#161616] flex items-center border  border-[#262626] rounded-[14px]"
            >
              <Swril />
              <p className="text-[#7A7A7A] font-inter text-base">{tab}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
