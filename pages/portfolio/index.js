import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import PortfolioSlider from '../../components/PortfolioSlider';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Porfolio = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2 
              variants={fadeIn('up', 0.2)} 
              initial="hidden" 
              animate="show"  
              exit="hidden" 
              className='h2 xl:mt-12'>
                Projetos<span className='text-accent'>.</span>
            </motion.h2>

            <motion.p 
              variants={fadeIn('up', 0.4)} 
              initial="hidden" 
              animate="show"  
              exit="hidden" 
              className='mb-4 max-w-[400px] mx-auto lg:mx-0 text-justify'>
                Desenvolvimento de aplicações Node, Next, React, Vue,js de alta desponibilidade e desempenho para que seu site
                fique com aquela aparência profissional atraindo muito mais clientes.                 
            </motion.p>            
          </div>

          <motion.div 
            variants={fadeIn('down', 0.6)} 
            initial="hidden" 
            animate="show"  
            exit="hidden" 
            className='w-full xl:max-w-[65%]'>
            <PortfolioSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Porfolio;