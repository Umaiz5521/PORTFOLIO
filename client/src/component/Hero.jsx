import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="grid grid-cols-1 pt-24  md:grid-cols-2 items-center gap-8 px-10 rounded-2xl ">
      {/* Left Text Section */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 2.5 }}
  className="text-white space-y-6 flex flex-col items-center justify-center min-h-screen"
>
  <h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-center md:text-center font-serif">
    Web Development <br className="hidden md:block" />
    Focused on Performance & Precision
  </h1>
  <p className="text-base md:text-lg text-gray-300 max-w-xl text-center leading-relaxed">
    I create responsive, high-performance websites with clean architecture and a focus on user experience.
  </p>
  <div className="flex justify-center">
   <Link to={"/projects"} > <button className="cursor-pointer px-6 py-3 bg-white text-purple-700 font-semibold rounded-xl shadow-md hover:bg-purple-100 transition">
      View My Work
    </button>
    </Link>
  </div>
</motion.div>



      {/* Right Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.5 }}
        className="flex justify-center mt-15 sm:mt-0"
      >
        <img
          src={assets.hero_img}
          alt="Adventure"
          className="w-72 h-80 object-cover rounded-2xl shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
