// data
import Link from 'next/link';

const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'inneo',         
          uri:'/portfolio.jpg', 
          path:'/portfolio.jpg'
        },
        {
          title: 'cooperados',
          uri:'/integrada.jpg',
          path: 'https://cooperado.integrada.coop.br/'
        },
        {
          title: 'genesis',
          uri:'/genesis.jpg',
          path: 'https://genesis.integrada.coop.br/'
        },
        {
          title: 'cacau',
          uri:'/cacau.png',
          path:'/cacau.png'
        },
      ],
    },
  ],
};

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

import { MdOpenInNew } from 'react-icons/md';

const WorkSlider = () => {
  return (
    <Swiper 
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[500px]'>
        {workSlides.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                {slide.images.map((imagem, index) => {
                  return (
                    <div key={index} className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                      <div className='flex items-center justify-center relative overflow-hidden group'>                       
                          <Image src={imagem.uri} width={500} height={250} alt=''/>
                        <div className='absolute inset-0 bg-gradient-to-l 
                          from-transparent via-[#e838cc] to-[#4a22bd] opacity-0
                          group-hover:opacity-80 transition-all duration-700'></div>
                          
                          <div className='absolute bottom-0 translate-y-full
                            group-hover:-translate-y-10 group-hover:xl:-translate-y-20 
                            transition-all duration-300'>

                            <div className='flex items-center'>  
                              <Link href={imagem.path} className='flex items-center gap-x-2 text-[13px] tracking-[0.2rem]' target='_blank'>                          
                                <div className='delay-100'>LIVE</div>
                                <div className='translate-y-[500%] group-hover:translate-y-0 
                                  transition-all duration-300 delay-150 uppercase'>{imagem.title}</div>
                                <div className='text-xl translate-y-[500%] group-hover:translate-y-0
                                  transition-all duration-300 delay-200'><MdOpenInNew /></div>
                              </Link>  
                            </div>                            
                          </div>
                      </div>
                    </div>
                  )                  
                })}
              </div>
            </SwiperSlide>
          )
        })}      
    
    </Swiper>
  );
};

export default WorkSlider;
