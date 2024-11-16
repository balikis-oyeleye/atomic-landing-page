import { FaStar } from "react-icons/fa";

const Metrics = () => {
  const socialMetrics = [
    {
      img: "/assets/images/loom.svg",
      text: "Creative, innovative and strategic. We have great achievements made together and looking to more",
      name: "Henry Arthur",
      role: "Head of Engineering, Loom",
    },
    {
      img: "/assets/images/intercom.svg",
      text: "Incredible group of people and talented professionals. Focused on the development of flexible",
      name: "Jerome Bell",
      role: "Product Analyst, Intercom",
    },
    {
      img: "/assets/images/abstract.svg",
      text: "A truly innovative approach to game play that sets this agency apart from its peers within the broader",
      name: "Eleanor Pena",
      role: "Head of Product Design, Abstract",
    },
  ];

  const numMetrics = [
    { num: "45+", text: "Happy customers" },
    {},
    { num: "5k+", text: "Hours spent on craft" },
    {},
    { num: "4.8", text: "Review rate" },
  ];

  return (
    <>
      {/* Separator */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-silver/20 to-transparent max-w-[2500px] mx-auto"></div>

      {/* contents */}
      <section
        id="metrics"
        className="pb-[90px] mt-24 overflow-hidden container"
      >
        <div className="flex items-center justify-between md:flex-row flex-col gap-20 pb-24">
          {socialMetrics.map((metric, index) => (
            <div key={index} className="flex items-center flex-col gap-5">
              <img
                src={metric.img}
                alt={metric.name}
                className="w-auto h-[33px]"
              />
              <blockquote className="text-[#7A7A7A] text-base font-inter md:max-w-[360px] leading-tight text-center min-h-[80px]">
                "{metric.text}"
              </blockquote>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} className="text-[#FEC84B] text-xl" />
                ))}
              </div>
              <div>
                <h4 className="text-[#7A7A7A] text-xl font-semibold font-poppins mb-[10px] text-center">
                  {metric.name}
                </h4>
                <p className="text-white/80 text-lg font-poppins font-semibold text-center">
                  {metric.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-silver/20 to-transparent max-w-[2500px] mx-auto"></div>

        <div className="flex items-center justify-between md:flex-row flex-col gap-10 pt-10">
          {numMetrics.map((metric, index) =>
            metric.num ? (
              <div key={index} className="flex items-center flex-col gap-5">
                <h4 className="bg-custom-gradient-text text-transparent bg-clip-text text-[45px] font-poppins tracking-tighter font-normal">
                  {metric.num}
                </h4>
                <p className="text-[#7A7A7A] text-lg font-semibold font-inter">
                  {metric.text}
                </p>
              </div>
            ) : (
              <div
                key={index}
                className="h-full w-[3px] md:h-[100px] bg-gradient-to-t from-transparent via-silver/20 to-transparent"
              />
            )
          )}
        </div>
      </section>
    </>
  );
};

export default Metrics;
