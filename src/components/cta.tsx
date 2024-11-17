const Cta = () => {
  return (
    <section
      id="cta"
      className="container md:pt-[90px] pb-[90px] overflow-hidden"
    >
      <div className="bg-cta-gradient rounded-3xl py-[60px] px-4">
        <h2 className="text-center font-poppins font-medium  text-4xl md:text-[44px] 2xl:text-[54px] text-primary 2xl:max-w-[700px] mx-auto leading-tight">
          Elevate the way you source design
        </h2>
        <p className="mt-8 text-center text-[#7D7F78] max-w-[450px] mx-auto">
          Get ready to start producing stunning, efficient design work without
          the hassles of hiring. Soon available.
        </p>
        <form
          className="rounded-[50px] p-[10px] border-border border flex items-center mt-8 max-w-[391.59px] mx-auto gap-2 bg-[#0D0D0D]"
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

export default Cta;
