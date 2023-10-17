import Image from "next/image";

const Circles = () => {
  return (
    <div className="w-[360px] xl:w-[360px] absolute -right-[190px] -bottom-[110px]
      mix-blend-color-dodge animate-pulse duration-75 z-10 rotate-45" >
        <Image src={'/circles2.png'} width={260} height={200} alt='' className="w-full h-full"/>
    </div>
  );
};

export default Circles;
