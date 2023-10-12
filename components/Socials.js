import Link from "next/link";
import { 
  RiYoutubeLine, 
  RiInstagramLine, 
  RiFacebookLine, 
  RiLinkedinLine, 
  RiTwitterLine, 
  RiGithubLine 
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-sm xl:text-xl">
      <Link href={'https://www.youtube.com/@tanomanual'} target="_blank" className="hover:text-accent transition-all duration-300" ><RiYoutubeLine /></Link>
      <Link href={'https://www.instagram.com/eduardocruz.oficial'} target="_blank" className="hover:text-accent transition-all duration-300" ><RiInstagramLine /></Link>
      <Link href={'https://www.facebook.com/inneobr'} target="_blank" className="hover:text-accent transition-all duration-300" ><RiFacebookLine /></Link>
      <Link href={'https://linkedin.com/in/inneobr'} target="_blank" className="hover:text-accent transition-all duration-300" ><RiLinkedinLine /></Link>
      <Link href={'https://twitter.com/inneobr'} target="_blank" className="hover:text-accent transition-all duration-300" ><RiTwitterLine /></Link>
      <Link href={'https://github.com/inneobr'} target="_blank" className="hover:text-accent transition-all duration-300" ><RiGithubLine /></Link>
    </div>
  );
};

export default Socials;
