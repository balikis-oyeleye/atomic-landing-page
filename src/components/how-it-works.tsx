import Swril from "../icons/swril.svg?react";
import Box1 from "../icons/box-1.svg?react";
import Box2 from "../icons/box-2.svg?react";
import Box3 from "../icons/box-3.svg?react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const featuresBox = [
    {
      title: "Tell us your vision",
      description:
        "Choose a plan and share your design project details with us: we’re here to listen.",
      image: Box1,
    },
    {
      title: "Receive the magic",
      description:
        "Sit back and relax: our expert designers will turn your vision into reality.",
      image: Box2,
    },
    {
      title: "Get ongoing support",
      description:
        "Your subscription ensures you have continuous access to our design team.",
      image: Box3,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const boxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="how-it-works" className="container pb-[90px] overflow-hidden">
      <motion.div
        className="flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Swril />
        <h2 className="text-[#DDFF00] font-medium font-inter text-lg">
          How it works
        </h2>
      </motion.div>
      <motion.p
        className="bg-custom-gradient-text text-transparent bg-clip-text text-center font-poppins mt-3 text-2xl md:text-3xl xl:text-[44px] tracking-tight max-w-[788px] mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="leading-[120%]">
          Top–notch designs, <br /> delivered at your doorstep.
        </span>
      </motion.p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 max-w-[1280px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {featuresBox.map((feature, index) => (
          <motion.div
            key={index}
            className="w-full bg-custom-box-gradient rounded-[30px] p-10 border  border-[#262626]"
            variants={boxVariants}
          >
            <div className="w-[98px] h-[98px] bg-[#131313E3] flex justify-center items-center rounded-full border border-[#262626]">
              <feature.image height={45} width={45} />
            </div>
            <div className="mt-6">
              <h3 className="font-poppins text-primary text-[22px]">
                {feature.title}
              </h3>
              <p className="font-inter text-base text-[#7A7A7A]">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HowItWorks;
