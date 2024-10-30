import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full px-5 md:px-10 lg:px-[64px] z-50">
      <div className="flex items-center justify-between">
        <a href="/">
          <img
            src="/assets/images/logo.png"
            alt="atomic logo"
            className="h-[50px] w-[50px]"
          />
        </a>
        <nav className="nav py-4 px-8 hidden md:block">
          <ul className="flex gap-8 items-center">
            <li className="nav-link">
              <a href="#benefits">Features</a>
            </li>
            <li className="nav-link">
              <a href="#how-it-works">How it works</a>
            </li>
            <li className="nav-link">
              <a href="#testimonials">Testimonials</a>
            </li>
            <li className="nav-link">
              <a href="#faqs">FAQs</a>
            </li>
          </ul>
        </nav>
        <a href="#cta" className="nav-cta">
          Notify me
        </a>

        <button className="nav-btn" onClick={() => setOpen(!isOpen)}>
          {!isOpen ? (
            <IoMenu className="text-primary text-2xl" />
          ) : (
            <IoClose className="text-white text-2xl" />
          )}
        </button>
      </div>

      {isOpen && (
        <nav className="nav md:hidden absolute w-full left-1/2 -translate-x-1/2 max-w-[90%] mt-2">
          <ul className="flex flex-col gap-6 items-center w-full py-10 px-8">
            <li className="nav-link">
              <a href="#benefits">Features</a>
            </li>
            <li className="nav-link">
              <a href="#how-it-works">How it works</a>
            </li>
            <li className="nav-link">
              <a href="#testimonials">Testimonials</a>
            </li>
            <li className="nav-link">
              <a href="#faqs">FAQs</a>
            </li>
            <li className="nav-link">
              <a href="#cta" className="nav-link">
                Notify me
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
