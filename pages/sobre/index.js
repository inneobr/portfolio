/* eslint-disable react/jsx-key */
import React, { useState } from "react";

// icons
import {
  FaAngular,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaReact,
  FaVuejs,
} from "react-icons/fa";

import {
  SiMariadb,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSpring,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import CountUp from "react-countup";

//  data
const aboutData = [
  {
    title: "habilidades",
    info: [
      {
        title:
          "Frameworks para desenvolvimento frontend nas linguagens Vue.js React, Angular com habilidades em HTML5 e CSS, SCSS",
        icons: [
          <FaVuejs />,
          <FaReact />,
          <FaAngular />,
          <FaHtml5 />,
          <FaCss3Alt />,
        ],
      },
      {
        title:
          "Desenvolvimnto Api-Rest em Spring Boot, utilizando técnicas modernas com código limpo, Design Patterns em programação orientada a objetos. ",
        icons: [
          <SiSpring />,
          <FaJava />,
          <SiPostgresql />,
          <SiMysql />,
          <SiMariadb />,
          <SiMongodb />,
        ],
      },
    ],
  },
  {
    title: "Cursos",
    info: [
      {
        title: "Rocketseat - Java e Spring Boot",
        stage: "2023",
      },
      {
        title: "Alura - Formação Java e Spring Boot",
        stage: "2022",
      },
      {
        title: "Microsoft: Tecnologia de IA para Líderes de Negócios. ",
        stage: "2020",
      },
      {
        title: "Microsoft: Conceitos de Desenvolvimento de Software.",
        stage: "2019",
      },
      {
        title: "Microsoft: Segurança e Privacidade em Computadores",
        stage: "2018",
      },
      {
        title: "Microsoft: Fundamentos de Rede.",
        stage: "2018",
      },
    ],
  },
  {
    title: "Experiência",
    info: [
      {
        title: "INSTI /  Coop. Integrada Agroindustial",
        stage: "2022 - 2023",
      },
      {
        title: "Portal Holistico",
        stage: "2020 - 2021",
      },
      {
        title: "Grupo Orbenk",
        stage: "2019 - 2020",
      },
    ],
  },
  {
    title: "Formação",
    info: [
      {
        title:
          "Desenvolvedores Graduados nas melhores instituiçoes de ensino do pais",
        stage: "",
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
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            className="h2"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Desenvolvimento de <span className="text-accent">Sistemas</span>
          </motion.h2>

          <motion.p
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Desenvolvimento de aplicativos e sites em React, Vue.js para
            cooperativas, lojas, centros automotivos, hotéis entre outros.
            Consultoria na área de T.I., segurança, outsourcing de profissionais
            de t.i., scrum e metodologia ágil, data science, softwares
            customizados.
          </motion.p>

          {/* counters */}
          <motion.div
            className="hidden md:flex md:max-w-sl xl:max-w-none mx-auto xl:mx-0 mb-8"
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div
                className="relative flex-1 after:w-[1px] after:h-full 
                  after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} delay={1} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Anos de experiência
                </div>
              </div>

              {/* projetos */}
              <div
                className="relative flex-1 after:w-[1px] after:h-full 
                  after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={80} delay={1} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Projetos finalizados
                </div>
              </div>

              {/* clientes */}
              <div
                className="relative flex-1 after:w-[1px] after:h-full 
                  after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
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
        <motion.div
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] "
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  }
                      cursor-pointer capitalize xl:text-lg relative after:w-8 
                      after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div
            className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4
              items-center xl:items-start"
          >
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="items-center justify-center">
                    <div className="text-justify font-light mb-2 md:mb-0">
                      {item.title}
                    </div>
                    <div>{item.stage}</div>
                    <div className="flex gap-x-4">
                      {/* icons */}
                      {item.icons?.map((icon, itemIndex) => {
                        return (
                          <div className="text-2xl text-white my-3">{icon}</div>
                        );
                      })}
                    </div>
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
