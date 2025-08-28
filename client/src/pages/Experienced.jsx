import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { assets } from '../assets/assets';

const Experienced = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const isLeftInView = useInView(leftRef, { margin: '-100px', once: false });
  const isRightInView = useInView(rightRef, { margin: '-100px', once: false });

  return (
    <section className='bg-gray-900 text-white min-h-screen flex items-center justify-center py-20 px-6 md:16'>
      <div className='max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center'>

        {/* Left Section */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: -50 }}
          animate={isLeftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.9 }}
        >
          <h2 className='text-4xl font-bold text-cyan-500 mb-4'>Experience</h2>
          <p className='text-gray-500'>
            With 2 years of experience building dynamic and user-friendly web applications Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis unde, exercitationem doloribus voluptate tenetur consequatur rem? Magnam nesciunt, corrupti sint iure dolor officiis eaque eos consequatur iusto, explicabo quia porro?
          </p>
          <div className='flex gap-6 mt-6 text-lg font-semibold'>
            <div>
              <span className='text-orange-400 text-3xl'>2</span> Years
            </div>
            <div>
              <span className='text-orange-400 text-3xl'>18</span> Websites
            </div>
          </div>
          <p className='mt-4 text-cyan-400 text-xl'>$100K <span className='text-gray-400'>Max Budget</span></p>
        </motion.div>

        {/* Right Section */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 50 }}
          animate={isRightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.9 }}
          className='bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center'
        >
          <img
            src={assets.Untitle}
            alt='Experience Illustration'
            className='w-40 h-40 object-cover rounded-lg mb-4'
          />
          <p className='text-gray-300'>
            I specialize in <span className='text-white font-semibold'>React and modern Javascript</span>, leveraging it to create scalable and maintainable solutions.
          </p>
          <p className='mt-4 text-gray-400'>
            My experience spans working on diverse projects, from small business websites to <span className='text-white font-semibold'>complex front-end systems</span>, always aiming for clean code and exceptional user experiences.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Experienced;
