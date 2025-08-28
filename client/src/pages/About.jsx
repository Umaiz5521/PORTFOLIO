import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

export default function About() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const isLeftInView = useInView(leftRef, { margin: '-100px', once: false });
  const isRightInView = useInView(rightRef, { margin: '-100px', once: false });

  return (
    <div className="bg-gray-900 pt-24 text-gray-300 min-h-screen flex items-center justify-center px-6 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left Side (Text) */}
        <motion.div
          ref={leftRef}
          className="md:w-[70%]"
          initial={{ opacity: 0, x: -50 }}
          animate={isLeftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-500 mb-6">
            About Me
          </h1>
          <p className="text-lg leading-relaxed mb-6 text-gray-300">
            Hey there! I’m <span className="text-white font-semibold">Umaiz</span>, a web development instructor with a deep passion for both teaching and coding. My specialty lies in <span className="text-white font-semibold">React and modern front-end technologies</span>, where I help students build real-world projects and grow their skills confidently.
            <br /><br />
            I also run <span className="text-white font-semibold">CodeNest</span> on YouTube — a platform where I share tutorials, insights, and courses to guide aspiring developers on their tech journeys. When I'm not coding, you'll find me exploring new tools, learning continuously, and sharing knowledge to uplift others in the dev community.
          </p>
          <Link
            to='/projects'
            className="bg-transparent border border-teal-400 text-teal-400 py-2 px-6 rounded-full hover:bg-teal-400 hover:text-gray-900 transition duration-300"
          >
            View My Projects
          </Link>
        </motion.div>

        {/* Right Side (Image) */}
        <motion.div
          ref={rightRef}
          className="md:w-[30%]"
          initial={{ opacity: 0, x: 50 }}
          animate={isRightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={assets.gpt}
            alt="Web development abstract illustration"
            className="rounded-xl shadow-lg mt-14"
          />
        </motion.div>
      </div>
    </div>
  );
}
