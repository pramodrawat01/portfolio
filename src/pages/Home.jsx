import React from "react";
import { motion } from "framer-motion";

const AnimatedLetter = ({ char }) => (
  <motion.span
    whileHover={{
      y: -10,
      scale: 0.85,
      rotate: 15,
    }}
    transition={{ type: "spring", stiffness: 300 }}
    className="inline-block"
  >
    {char}
  </motion.span>
);

const renderText = (text) =>
  [...text].map((char, index) => (
    <AnimatedLetter key={index + char} char={char} />
  ));

const Home = () => {
  return (
    <div className="bg-[#181818] text-white min-h-[calc(100vh-5rem)] w-full">
  {/* Hero Section */}
  <section className="min-h-[calc(100vh-5rem)] flex justify-end items-center px-4 md:justify-start md:lg:items-end">
    <div className="text-center md:text-left">
      <div className="text-[70px] leading-none md:text-[120px] lg:text-[140px]">
        {renderText("PRAMOD")}
        <span className="text-indigo-500">{renderText(".")}</span>
      </div>

      <div className="flex flex-col items-end md:items-start md:flex-row ml-[150px]">
        <div className="text-[60px] sm:text-[80px] md:text-[120px]">
        
          {renderText("SINGH")}
          <span className="text-indigo-300">{renderText(".")}</span>
        </div>
        <div className="text-[45px] sm:text-[60px] md:text-[120px] lg:text-[180px]">
          {renderText("RAWAT.")}
        </div>
      </div>
      
      <motion.div
        className="relative group"
        initial="rest"
        whileHover="hovered"
        animate="rest"
      >
        <img
          src="/arrow2.png"
          alt="Arrow"
          className="absolute bottom-70 right-40 w-75 h-75 rotate-30"
        />

        <motion.div
          variants={{
            hovered: { opacity: 1, y: -30, scale: 1, },
            rest: { opacity: 0, y: 0, scale: 0.95 },
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute bottom-130 right-[100px] text-white bg-black px-4 py-2 rounded-md"
        >
          Hello from the dev.!
        </motion.div>
      </motion.div>

    </div>
  </section>
</div>

  );
};

export default Home;
