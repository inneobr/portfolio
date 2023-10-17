import Image from "next/image";

const Circles = () => {
  return (
    <div className="w-[360px] xl:w-[360px] absolute -right-[200px] -bottom-[150px]
      mix-blend-color-dodge animate-pulse duration-75 z-10 rotate-90" >
        <Image src={'/circle.png'} width={260} height={200} alt='' className="w-full h-full"/>
    </div>
  );
};

export default Circles;
