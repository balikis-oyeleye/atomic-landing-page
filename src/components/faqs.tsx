import { GoPlus } from "react-icons/go";
import Swril from "../icons/swril.svg?react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQsProps {
  faq: {
    question: string;
    answer: string;
  };
  index: number;
}

const FAQs = () => {
  const faqs = [
    {
      question: "Can I use Atomic Template for commercial purposes?",
      answer:
        "This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. See more at https://www.gnu.org/licenses/gpl-3.0.html",
    },
    {
      question: "Read and understand Template restrictions",
      answer:
        "This template utilizes graphic resources that are the property of their respective owners. All graphic resources are used for presentation purposes.Please strictly follow these restrictions: \n \n- Users are allowed to use this template for personal and non-commercial purposes only. \n \n- Users are NOT permitted to extract or use the graphic resources for purposes other than presentation within this template. \n \n- Redistribution or resale of this template, in whole or in part, is strictly prohibited.",
    },
    {
      question: "Accept the Template Usage Disclaimer",
      answer:
        "The graphic resources used in this template are owned by their respective creators, and their use is subject to the specified licensing terms. Users are responsible for adhering to these terms and should contact the original creators for any inquiries regarding the usage or licensing of the graphic resources.",
    },
    {
      question: "Disclaimer of Responsibility for Usage",
      answer:
        "The authors disclaim any liability for damages or issues arising from the use of these graphic resources outside the context of this template. End users are solely responsible for ensuring compliance with the specified licensing terms, as well as any applicable laws or regulations.",
    },
    {
      question: "Graphic Assets attribution Notice",
      answer:
        "We have made every effort to appropriately credit the authors and creators of the graphic resources used in this template. However, if you believe that we may have inadvertently missed or misrepresented your work, we sincerely apologize.\n\nWe value and respect the creative contributions of all individuals, and we want to ensure that proper credit is given where it is due. If you are the owner of any graphic resource included in this template and your attribution is not accurately reflected, please do not hesitate to reach out to us. \n\nContact us at hello@andreamontini.me and we will promptly address any oversight by adding the correct attribution or providing the necessary information.",
    },
    {
      question: "How to contact the author of this Template?",
      answer:
        "For questions or clarifications, please contact hello@andreamontini.me",
    },
  ];

  const Faq = ({ faq, index }: FAQsProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    useEffect(() => {
      if (index === 0) setIsOpen(true);
    }, []);

    return (
      <motion.div
        layout
        className={`w-full  rounded-[30px] ${
          isOpen ? "mt-4 bg-[#161616]" : ""
        }  overflow-hidden p-5`}
      >
        <button
          onClick={toggleOpen}
          className="flex items-center justify-between w-full gap-4"
        >
          <h3 className="font-poppins text-start text-primary text-sm md:text-[22px]">
            {faq.question}
          </h3>

          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <GoPlus className="text-primary" size={24} />
          </motion.div>
        </button>

        {/* Animated content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="font-inter text-start text-base text-[#7A7A7A] whitespace-pre-wrap pt-4">
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <section
      id="faqs"
      className="container md:pt-[90px] pb-[90px] overflow-hidden"
    >
      <motion.div
        className="flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Swril />
        <h2 className="text-[#DDFF00] font-medium font-inter text-lg">FAQs</h2>
      </motion.div>
      <motion.p
        className="bg-custom-gradient-text text-transparent bg-clip-text text-center font-poppins mt-3 text-2xl md:text-3xl xl:text-[44px] tracking-tight max-w-[788px] mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="leading-[120%]">We’ve got the answers</span>
      </motion.p>

      <motion.div
        className="grid grid-cols-1 mt-14 max-w-[800px] mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {faqs.map((faq, index) => (
          <Faq key={index} faq={faq} index={index} />
        ))}
      </motion.div>

      <p className="mt-8 text-[#7A7A7A] text-base text-start md:text-center">
        <span>Still have more questions? Contact our</span>
        <a href="#" className="text-primary ml-1">
          help center.
        </a>
      </p>
    </section>
  );
};

export default FAQs;
