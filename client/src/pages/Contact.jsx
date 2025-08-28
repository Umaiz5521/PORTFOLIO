import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { assets } from '../assets/assets';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const headingRef = useRef(null);
  const cardRef = useRef(null);

  const isHeadingInView = useInView(headingRef, { margin: '-100px', once: false });
  const isCardInView = useInView(cardRef, { margin: '-100px', once: false });

  return (
    <div className='min-h-screen pt-30 bg-gray-900 flex items-center justify-center px-4 py-10'>
      {/* CONTAINER with fixed max-width */}
      <div className='w-full max-w-[900px] px-4 flex flex-col items-center'>

        <motion.h1
          ref={headingRef}
          initial={{ opacity: 0, y: -20 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.9 }}
          className='text-4xl font-bold text-cyan-500 mb-6 text-center'
        >
          Contact Me
        </motion.h1>

        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isCardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.9 }}
          className='bg-gray-700 shadow-xl rounded-2xl p-8 w-full flex flex-col md:flex-row gap-6'
        >

          {/* Contact Form */}
          <div className='flex-1'>
            <h2 className='text-2xl font-bold text-white'>Get In Touch</h2>
            <p className='text-gray-300 mt-2'>
              Feel free to reach out if you'd like to collaborate. You're just a few clicks away!
            </p>
            <form className='mt-6 space-y-4'>
              <input
                type="text"
                placeholder='Your Name'
                className='w-full p-3 border border-gray-400 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400'
              />
              <input
                type="email"
                placeholder='Your Email'
                className='w-full p-3 border border-gray-400 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300'
              />
              <textarea
                placeholder='Message'
                rows="4"
                className='w-full p-3 rounded-lg border border-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-300'
              ></textarea>
              <button className='w-full bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition'>
                Send
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className='flex-1 flex flex-col items-center text-center'>
            <motion.img
              src={assets.laptop}
              alt='Contact'
              className='w-32 h-32 mb-4'
              initial={{ scale: 0.8 }}
              animate={isCardInView ? { scale: 1 } : { scale: 0.8 }}
              transition={{ duration: 0.5 }}
            />
            <p className='text-gray-300 font-semibold'>sports125521@gmail.com</p>
            <p className='text-gray-200'>+92 345 0924179</p>
            <p className='text-gray-300'>Umaiz, Pakistan</p>
            <div className='flex space-x-4 mt-4'>
              <a href="https://www.linkedin.com/in/umaiz-khan-9b8066359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='text-blue-600 text-2xl hover:opacity-75 transition'>
                <FaLinkedin />
              </a>
              <a href="https://github.com/" className='text-gray-300 text-2xl hover:opacity-75 transition'>
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/muhammadumaiz109/?utm_source=qr&r=nametag" className='text-pink-500 text-2xl hover:opacity-75 transition'>
                <FaInstagram />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
