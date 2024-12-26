import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Swirl from "../icons/swril.svg?react";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="testimonials" className="pb-[90px] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-[1280px] mx-auto px-4">
        <motion.div
          className="flex flex-col justify-center items-center md:items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* first */}
          <motion.div
            className="flex items-center gap-2 mb-[42px]"
            variants={childVariants}
          >
            <Swirl />
            <h3 className="text-yellow font-inter text-base font-semibold">
              Customer story
            </h3>
          </motion.div>
          {/* second */}
          <motion.blockquote
            className="text-primary text-2xl md:text-[32px] font-poppins md:max-w-[613px] leading-tight mb-[35px] text-center md:text-start"
            variants={childVariants}
          >
            "Our growth no longer necessitates the recruitment and education of
            additional design professionals"
          </motion.blockquote>
          {/* third */}
          <motion.a
            href="https://www.framer.com/customers/zapier"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary flex items-center gap-[6px]"
            variants={childVariants}
          >
            <span className="font-inter text-lg">Read the story</span>
            <IoArrowForwardCircleOutline size={32} />
          </motion.a>
        </motion.div>
        <motion.div
          className="md:max-w-[614px] max-h-[430px] mx-auto relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <img
            src="/assets/images/man.png"
            className="rounded-3xl  w-full h-full object-center"
            loading="lazy"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] bg-black/55 flex items-center justify-center rounded-full cursor-pointer">
            <FaPlay size={28} className="text-white" />
          </div>
          <div></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
