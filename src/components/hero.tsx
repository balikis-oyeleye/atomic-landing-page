const Hero = () => {
  return (
    <section className="container h-[888px]">
      <div className="mt-20 sm:mt-[112px] ">
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
    </section>
  );
};

export default Hero;
