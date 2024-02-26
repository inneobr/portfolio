import Image from "next/image";
import Link from "next/link";
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href={'/'} className="hidden xl:flex md:flex">
            <Image className="xl:w-[220px] xl:h-[78px]"
              src={'/logo.svg'} 
              width={0} 
              height={0} 
              alt='logo da inneo.org' 
              loading='lazy'
              decoding='async'
              priority={true}
            />
          </Link>
          {/* Social */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
