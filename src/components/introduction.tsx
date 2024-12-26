import Swril from "../icons/swril.svg?react";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <section className="container pb-[80px]">
      <motion.div
        className="flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Swril />
        <h2 className="text-[#DDFF00] font-medium font-inter text-lg">
          INTRODUCING BOLT
        </h2>
      </motion.div>
      <motion.p
        className="font-poppins text-center mt-3 text-2xl md:text-3xl xl:text-[44px] tracking-tight max-w-[840px] mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-primary leading-[120%]">
          We know what’s going on.
        </span>
        <span className="text-[#4D4D4D] leading-[120%]">
          {" "}
          You need top-notch design to stand out in the tech world, but hiring
          in-house designers can be costly and time-consuming.{" "}
        </span>
        <br />
        <span className="text-primary leading-[120%]">
          That’s when Atomic comes in.
        </span>
      </motion.p>
    </section>
  );
};

export default Introduction;
