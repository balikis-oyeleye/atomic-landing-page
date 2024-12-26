import { motion } from "framer-motion";

const Cta = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
        ease: "easeOut",
      },
    },
  };
  return (
    <section
      id="cta"
      className="container md:pt-[90px] pb-[90px] overflow-hidden"
    >
      <motion.div
        className="bg-cta-gradient rounded-3xl py-[60px] px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        layout="position"
      >
        <motion.h2
          className="text-center font-poppins font-medium  text-4xl md:text-[44px] 2xl:text-[54px] text-primary 2xl:max-w-[700px] mx-auto leading-tight"
          variants={boxVariants}
        >
          Elevate the way you source design
        </motion.h2>
        <motion.p
          className="mt-8 text-center text-[#7D7F78] max-w-[450px] mx-auto"
          variants={boxVariants}
        >
          Get ready to start producing stunning, efficient design work without
          the hassles of hiring. Soon available.
        </motion.p>
        <motion.form
          className="rounded-[50px] p-[10px] border-border border flex items-center mt-8 max-w-[391.59px] mx-auto gap-2 bg-[#0D0D0D]"
          onSubmit={(e) => e.preventDefault()}
          variants={boxVariants}
        >
          <input
            type="email"
            placeholder="name@email.com"
            className="hero-form-input"
          />
          <button type="submit" className="hero-form-btn">
            Get notified
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Cta;
