import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import profile from "../assets/profile.png";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col md:flex-row md:items-center md:gap-10">
        <div className="flex-1">
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            I'm a junior studying Computer Science at Arizona State University with a passion for Machine Learning, Artificial Intelligence, and Computer Vision. I love taking complex problems and turning them into intelligent, creative solutions—whether it's building smart systems or clean, interactive websites. Outside of tech, you'll usually find me playing cricket, diving into video games, or exploring a new city. I'm always up for a challenge, constantly learning, and genuinely excited about using technology to make something awesome.
          </motion.p>
        </div>
        <div className="flex justify-center items-center mt-8 md:mt-0">
          <img
            src={profile}
            alt="Profile"
            className="w-48 h-64 rounded-2xl object-cover border-4 border-[#915EFF] shadow-lg"
          />
        </div>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
