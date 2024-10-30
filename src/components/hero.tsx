const Hero = () => {
  return (
    <section className="px-5 md:px-10 lg:px-[64px] py-0 md:py-[60px] relative overflow-hidden">
      <div className="mt-20 sm:mt-[112px]">
        <h1 className="hero-heading">
          Design work,
          <br /> the efficient way
        </h1>
        <p className="lg:max-w-[391.59px] font-inter text-base mx-auto text-center text-[#7D7F78] tracking-tighter mt-8">
          Innovative design solutions for technology firms and emerging
          businesses weary of the typical aesthetic methodology. Arriving
          shortly.
        </p>
        <form
          className="rounded-[50px] p-[10px] border-border border flex items-center mt-8 max-w-[391.59px] mx-auto gap-2 "
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
        </form>
      </div>

      <div className="absolute bottom-0 top-0 h-full w-full pointer-events-none z-10 hidden 2xl:block">
        <div className="bg-dark-shadow h-full"></div>
      </div>

      <div className="mt-11 2xl:mt-20 md:flex justify-center hidden">
        <div className="">
          <p className="text-[#7A7A7A] font-inter text-base font-light">
            Nur Praditya
          </p>
          <img
            src="/public/assets/images/nur.png"
            alt=""
            className="w-64 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
