import { motion } from 'framer-motion';
import Circles from  '/components/Circles';
import { BsArrowRight } from 'react-icons/bs';
import { dadeIn } from '../../variants';


const Contato = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex 
        items-center justify-center h-full'>

        <div className='flex flex-col w-full max-w-[700px]'>  
        
          <h2 className='h2 text-center mb-12'>
          FALE CONOSCO <br /><span className='text-accent'>SOLICITE SEU ORÇAMENTO</span>
          </h2>

          <form className='flex-1 flex flex-col gap-6 w-full mx-auto'> 
            <div className='flex gap-x-6 w-full'>
              <input type='text' placeholder='nome' className='input' />
              <input type='text' placeholder='email' className='input' />
            </div>
            <input type='text' placeholder='assunto' className='input' />
            <textarea placeholder='mensagem' className='textarea'></textarea>
            
            <button className='bnt rounded-full border border-white/50 max-w-[170px]
              px-8 transition-all duration-300 flex items-center justify-center
              overflow-hidden hover:border-accent group'>

              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 
                transition-all duration-500 uppercase'>
                enviar
              </span>

              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex
                group-hover:-translate-y-0 group-hover:opacity-100 transition-all
                duration-300 absolute text-[22px] text-semibold'/>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contato;
