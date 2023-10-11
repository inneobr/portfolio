import Image from "next/image";
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">

      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          
          {/* title */}
          <motion.h1 
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h1">
            Tranforme Idéias <br /> em <span className="text-accent">Realidade Digital</span>
          </motion.h1>
          {/* title */}
          <motion.p 
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="text-justify max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Aprender a como transformar uma ideia em negócio é uma dúvida muito comum entre pessoas que querem começar a empreender.
            Para fazer isso na prática, é preciso ter disciplina com o seu projeto e ficar de olho em alguns pontos fundamentais para que essa ideia consiga sair do papel e ser lucrativa.
          </motion.p>
           {/* bnt */}
           <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
           </div>
           <motion.div 
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="hidden xl:flex"
           >
            <ProjectsBtn />
           </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right
          xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>

          {/* particulas */}
          <ParticlesContainer />
          
          {/* avatar img */}
          <motion.div 
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={{duration: 1, ease: 'easeInOut'}}
            className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32
            lg:bottom-0 lg:right-[8%]">
            <Avatar />
          </motion.div>
      </div>
    </div>  
  );
};

export default Home;
