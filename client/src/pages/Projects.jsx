import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import port from '../assets/port.png';
import blog from '../assets/blog.png';
import ban from '../assets/ban.png';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio built using React, Tailwind CSS, and Framer Motion.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    image: port,
    link: '#',
  },
  {
    title: 'E-commerce App',
    description: 'Full-stack MERN app with shopping cart, user auth, and payment integration.',
    tech: ['MongoDB', 'Express', 'React', 'Node'],
    image: ban,
    link: '#',
  },
  {
    title: 'Blog Platform',
    description: 'Markdown blog platform with full admin dashboard and JWT authentication.',
    tech: ['Node.js', 'Express', 'MongoDB'],
    image: blog,
    link: '#',
  },
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px', once: false });

  const animation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="bg-[#1E293B] rounded-2xl overflow-hidden shadow-md hover:shadow-violet-500/20 transition-shadow duration-300"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={animation}
    >
      <div className="w-full aspect-video bg-black">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="p-5">
        <h3 className="text-2xl font-semibold text-violet-400 mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-violet-500 text-white text-xs font-medium px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          className="text-violet-300 hover:underline text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project →
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="bg-[#0F172A] pt-30 text-white py-16 px-6 font-sans" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false }}
        >
          My Projects
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
