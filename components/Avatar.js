import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image 
        src={'/profile-pages.png'} 
        width={737} 
        height={678} 
        alt='organização de paginas'
        loading='lazy'
        decoding='async' 
        className="translate-z-0 w-full h-full "/>
    </div>
  );
};

export default Avatar;
