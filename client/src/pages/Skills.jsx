import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  { name: 'React', percentage: 60 },
  { name: 'JavaScript', percentage: 50 },
  { name: 'Node.js', percentage: 85 },
  { name: 'MongoDB', percentage: 80 },
  { name: 'Express', percentage: 85 },
  { name: 'HTML', percentage: 98 },
  { name: 'CSS', percentage: 96 },
];

const SkillBar = ({ skill, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px', once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ delay: index * 0.2, duration: 1 }}
      className="bg-[#1E293B] p-4 rounded-2xl shadow-lg"
    >
      <div className="flex justify-between mb-1">
        <span className="text-lg font-semibold text-white">{skill.name}</span>
        <span className="text-sm text-gray-300">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 h-3 rounded-full">
        <motion.div
          className="h-3 bg-violet-500 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
          transition={{ duration: 1 }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="bg-[#0F172A] pt-30 text-white py-12 px-6 font-sans" id="skills">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">Skills & Proficiency</h2>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
