/* eslint-disable react/jsx-key */
import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNode,
  FaVuejs,
  FaJava,
  FaAngular,
  FaBootstrap
} from "react-icons/fa";

import {
  SiPhp
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

import CountUp from "react-countup";


//  data
const aboutData = [
  {
    title: 'habilidades',
    info: [
      {
        title: 'Desenvolvedor Frontend',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaBootstrap />,
          <FaJs />,
          <FaVuejs />,
          <FaAngular />,
          <FaNode />,
        ],
      },
      {
        title: 'Backend',
        icons: [<FaJava />, <SiPhp />],
      },
    ],
  },
  {
    title: 'Prêmios',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experiência',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credenciais',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primery/30 py-32 text-center xl:text-left">
        <Circles />
        {/* Avatar */}
        <motion.div         
          variants={fadeIn('right', 0.2)} 
          initial='hidden' 
          animate='show' 
          exit='hidden' 
          className="hidden xl:flex absolute bottom-0 -left-[370px]"
        >
          <Avatar />
        </motion.div>

        <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
          {/* text */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.h2 className="h2"
              variants={fadeIn('right', 0.2)} 
              initial='hidden' 
              animate='show' 
              exit='hidden' 
            >
              Histórias <span className="text-accent">cativantes</span> geram designs magníficos
            </motion.h2>

            <motion.p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-justify"
              variants={fadeIn('right', 0.4)} 
              initial='hidden' 
              animate='show' 
              exit='hidden'
            >              
              Todos os aspectos da sociedade contemporânea passam hoje por um acelerado processo de transformação digital. 
              Especialistas definem o fenômeno como o conjunto de efeitos decorrentes da digitalização do mundo, ou seja, 
              o processo de mudanças possibilitadas pela conversão da informação analógica em dados digitais. 
            </motion.p>

            {/* counters */}
            <motion.div className="hidden md:flex md:max-w-sl xl:max-w-none mx-auto xl:mx-0 mb-8"
              variants={fadeIn('right', 0.6)} 
              initial='hidden' 
              animate='show' 
              exit='hidden'
            >
              <div className="flex flex-1 xl:gap-x-6">
                {/* experience */}
                <div className="relative flex-1 after:w-[1px] after:h-full 
                  after:bg-white/10 after:absolute after:top-0 after:right-0">
                    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                      <CountUp start={0} end={10} delay={1} duration={5} />+                     
                    </div> 
                    <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                      Anos de experiência
                    </div>
                </div>

                {/* projetos */}
                <div className="relative flex-1 after:w-[1px] after:h-full 
                  after:bg-white/10 after:absolute after:top-0 after:right-0">
                    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                      <CountUp start={0} end={80} delay={1} duration={5} />+                     
                    </div> 
                    <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                      Projetos finalizados
                    </div>
                </div>
                
                {/* clientes */}
                <div className="relative flex-1 after:w-[1px] after:h-full 
                  after:bg-white/10 after:absolute after:top-0 after:right-0">
                    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                      <CountUp start={0} end={250} delay={1} duration={5} />+                     
                    </div> 
                    <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                      Clientes satisfeitos
                    </div>
                </div>

                {/* sonhos */}
                <div className="relative flex-1">
                    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                      <CountUp start={0} end={650} delay={1} duration={5} />+                     
                    </div> 
                    <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                      Sonhos realizados
                    </div>
                </div>
              </div>                
            </motion.div>
          </div>

          {/* info */}
          <motion.div className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
            variants={fadeIn('left', 0.4)} 
            initial='hidden' 
            animate='show' 
            exit='hidden'
          >
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
              {aboutData.map((item, itemIndex) => { 
                return (
                  <div key={itemIndex} 
                    className={`${
                      index === itemIndex &&
                      'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}
                      cursor-pointer capitalize xl:text-lg relative after:w-8 
                      after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                      onClick={() => setIndex(itemIndex)}>
                      {item.title}
                  </div>
                )
              })}
            </div>
            <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4
              items-center xl:items-start">
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                    {/* title */}
                    <div className="font-light mb-2 md:mb-0">{item.title}</div>
                    <div className="hidden md:flex">-</div>
                    <div>{item.stage}</div>
                    <div className="flex gap-x-4">
                      {/* icons */}
                      {item.icons?.map((icon, itemIndex) => {
                        return (
                          <div className="text-2xl text-white">{icon}</div>
                        )
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
    </div>
  );
};
export default About;
