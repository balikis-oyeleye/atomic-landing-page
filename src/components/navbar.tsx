import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.3 }}
      className="sticky top-0 w-full px-5 md:px-10 lg:px-[64px] z-50 py-8"
    >
      <div className="flex items-center justify-between">
        <a href="#hero">
          <img
            src="/assets/images/logo.png"
            alt="atomic logo"
            className="h-[50px] w-[50px]"
          />
        </a>
        <nav className="nav py-4 px-8 hidden md:block">
          <ul className="flex gap-8 items-center">
            <li className="nav-link">
              <a href="#features">Features</a>
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

        {isOpen ? (
          <button className="nav-btn" onClick={() => setOpen(false)}>
            <IoClose className="text-white text-3xl" />
          </button>
        ) : (
          <button className="nav-btn" onClick={() => setOpen(true)}>
            <IoMenu className="text-white text-3xl" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            key="nav"
            initial={{ opacity: 0, y: -5, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -5, x: "-50%" }}
            transition={{ duration: 0.5 }}
            className="nav md:hidden absolute w-full max-w-[90%] mt-2 left-1/2"
          >
            <ul className="flex flex-col gap-6 items-center w-full py-10 px-8">
              <li className="nav-link">
                <a href="#features" onClick={() => setOpen(false)}>
                  Features
                </a>
              </li>
              <li className="nav-link" onClick={() => setOpen(false)}>
                <a href="#how-it-works">How it works</a>
              </li>
              <li className="nav-link" onClick={() => setOpen(false)}>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li className="nav-link" onClick={() => setOpen(false)}>
                <a href="#faqs">FAQs</a>
              </li>
              <li className="nav-link" onClick={() => setOpen(false)}>
                <a href="#cta" className="nav-link">
                  Notify me
                </a>
              </li>
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
