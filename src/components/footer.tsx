import Logo from "../icons/footer-logo.svg?react";

const Footer = () => {
  const links = ["Contact", "Privacy & Cookie Policy", "Terms & Conditions"];
  return (
    <footer className="px-5 md:px-10 lg:px-[64px] py-8">
      <div className="flex items-center justify-between flex-col xl:flex-row gap-8">
        <div className="flex-grow basis-0 flex-shrink-0">
          <Logo />
        </div>
        <ul className="flex items-center gap-8 flex-col md:flex-row ">
          {links.map((link) => (
            <li key={link} className="text-[#7A7A7A] font-inter text-sm">
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
        <div className="flex-grow basis-0 flex-shrink-0 justify-end flex  items-center">
          <p className="text-primary font-inter text-sm text-center">
            Made with love by{" "}
            <a
              href="https://x.com/AndreaMontini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7A7A7A] hover:text-primary transition-colors"
            >
              Andrea Montini
            </a>{" "}
          </p>
        </div>
      </div>

      <p className="text-primary font-inter text-sm text-center mt-2">
        Developed by with ❤️{" "}
        <a
          href="https://github.com/balikis-oyeleye"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#7A7A7A] hover:text-primary transition-colors"
        >
          Balikis
        </a>
      </p>
    </footer>
  );
};

export default Footer;
