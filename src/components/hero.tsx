import { motion } from "motion/react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="px-5 md:px-10 lg:px-[64px] py-0 md:pt-[60px] md:pb-[120px] relative overflow-hidden"
    >
      <div className="mt-12 sm:mt-[60px]">
        <motion.h1
          initial={{ scale: 0, y: 50 }}
          animate={{ scale: 1, y: 0, transition: { duration: 1.2 } }}
          className="hero-heading"
        >
          Design work,
          <br /> the efficient way
        </motion.h1>
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: 50 }}
            animate={{ y: 0, transition: { duration: 1.3 } }}
            className="md:max-w-[391.59px] font-inter text-base mx-auto text-center text-[#7D7F78] xl:tracking-normal mt-8 overflow-hidden"
          >
            Innovative design solutions for technology firms and emerging
            businesses weary of the typical aesthetic methodology. Arriving
            shortly.
          </motion.p>
        </div>
        <motion.form
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay: 0.8 },
          }}
          className="rounded-[50px] p-[10px] border-border border flex items-center mt-8 max-w-[391.59px] mx-auto gap-2 z-10"
          onSubmit={(e) => e.preventDefault()}
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
      </div>

      <div className="absolute bottom-0 top-0 h-full w-full pointer-events-none z-10 hidden 2xl:block">
        <div className="bg-dark-shadow h-full"></div>
      </div>

      {/* Decorative Images */}
      <>
        {/* Nur Praditya */}
        <div className="mt-11 2xl:mt-20 md:flex justify-center hidden">
          <div className="">
            <p className="text-[#7A7A7A] font-inter text-sm font-light">
              Nur Praditya
            </p>
            <img
              src="/assets/images/nur.png"
              alt=""
              className="w-64 h-auto object-contain"
            />
          </div>
        </div>

        {/* Sugar */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, delay: 0.4 },
          }}
          className="absolute bottom-7 left-[30px] rounded-2xl overflow-hidden 2xl:bottom-[100px] 2xl:left-[160px] hidden md:block"
        >
          <img
            src="/assets/images/sugar.png"
            alt=""
            height={250}
            width={200}
            className="object-contain"
          />
        </motion.div>

        {/* Thomas  */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, delay: 0.6 },
          }}
          className="absolute bottom-7 right-[18px] rounded-2xl overflow-hidden 2xl:bottom-[100px] 2xl:right-[160px] hidden md:block"
        >
          <div className="relative">
            <img
              src="/assets/images/thomas.png"
              alt=""
              height={240}
              width={222}
            />
            <p className="text-[#7A7A7A] font-inter text-sm font-light absolute z-10 top-10 left-3 object-contain">
              Thomas Cullen
            </p>
          </div>
        </motion.div>

        {/* Vlad */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, delay: 0.2 },
          }}
          className="absolute -left-10 rounded-2xl top-[30%]  overflow-hidden 2xl:left-[80px] hidden md:block"
        >
          <div className="flex flex-col gap-1">
            <img
              src="/assets/images/vlad.avif"
              alt=""
              height={212}
              width={207}
              className="object-contain"
            />
            <p className="text-[#7A7A7A] font-inter text-sm font-light self-end">
              Vlad Muslakov
            </p>
          </div>
        </motion.div>

        {/* Aryan  */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, delay: 0.8 },
          }}
          className="absolute -right-16 rounded-2xl top-[30%]  overflow-hidden 2xl:right-[80px] hidden md:block"
        >
          <div className="relative">
            <img
              src="/assets/images/aryan.avif"
              alt=""
              height={212}
              width={207}
              className="object-contain"
            />
            <p className="text-[#7A7A7A] font-inter text-sm font-light absolute bottom-0 z-10 left-4">
              Aryan Shah
            </p>
          </div>
        </motion.div>

        {/* Sarah */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, delay: 0.8 },
          }}
          className="absolute left-10 rounded-2xl top-[20%] overflow-hidden 2xl:left-[350px] 2xl:top-[40%] hidden md:block"
        >
          <img
            src="/assets/images/sarah.png"
            alt=""
            height={68}
            width={95}
            className="object-contain"
          />
        </motion.div>

        {/* Eliah */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, delay: 0.8 },
          }}
          className="absolute right-10 rounded-2xl top-[20%] overflow-hidden 2xl:right-[400px] 2xl:top-[30%] hidden md:block"
        >
          <img
            src="/assets/images/eliah.png"
            alt=""
            height={68}
            width={95}
            className="object-contain"
          />
        </motion.div>
      </>

      {/* Slides for tablet screen */}
      <div className="md:hidden block">
        <div className="flex py-10 items-center gap-10 overflow-x-auto whitespace-nowrap">
          <div className="flex justify-center rounded-2xl overflow-hidden min-w-[200px]">
            <img
              src="/assets/images/sugar.png"
              alt=""
              height={250}
              width={200}
              className="object-contain"
            />
          </div>

          <div className="rounded-2xl overflow-hidden min-w-[256px]">
            <div className="relative">
              <img
                src="/assets/images/nur.png"
                alt=""
                className="w-64 h-auto object-contain"
              />
              <p className="text-[#7A7A7A] font-inter text-[10px] font-light absolute z-10 top-0 left-3">
                Nur Praditya
              </p>
            </div>
          </div>

          <div className="flex justify-center min-w-[207px]">
            <div>
              <img
                src="/assets/images/aryan.avif"
                alt=""
                height={212}
                width={207}
                className="object-contain"
              />
              <p className="text-[#7A7A7A] font-inter text-[10px] font-light">
                Aryan Shah
              </p>
            </div>
          </div>

          <div className="flex justify-center rounded-2xl overflow-hidden min-w-[207px]">
            <div className="rounded-2xl overflow-hidden relative">
              <img
                src="/assets/images/vlad.avif"
                alt=""
                height={212}
                width={207}
                className="object-contain"
              />
              <p className="text-[#7A7A7A] font-inter text-[10px] font-light absolute top-0 left-2">
                Vlad Muslakov
              </p>
            </div>
          </div>

          <div className="flex justify-center rounded-2xl overflow-hidden min-w-[222px]">
            <div className="relative">
              <img
                src="/assets/images/thomas.png"
                alt=""
                height={240}
                width={222}
                className="object-contain"
              />
              <p className="text-[#7A7A7A] font-inter text-[10px] font-light absolute top-5 left-1">
                Thomas Cullen
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
