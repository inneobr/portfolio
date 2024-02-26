import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-[43px] -bottom-[45px] -rotate-180 mix-blend-color-dodge
      animate-pulse duration-75 z-10 w-[300px] xl:w-360xp">
      <Image 
        src={'/red-light.png'} 
        width={260}
        height={260}
        className='w-full h-full'
        alt='imagem pulsante luz vermelha'
        loading='lazy'
        decoding='async'/>
    </div>
  );
};

export default Bulb;
