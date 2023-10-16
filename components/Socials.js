import Link from "next/link";
import {
  RiDownload2Line,
  RiFacebookLine,
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTwitterLine,
  RiWhatsappLine,
  RiYoutubeLine
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl">
      <Link href={'https://www.youtube.com/@tanomanual'} target="_blank" className="hover:text-accent transition-all duration-300" title="Youtube"><RiYoutubeLine /></Link>
      <Link href={'https://www.instagram.com/eduardocruz.oficial'} target="_blank" className="hover:text-accent transition-all duration-300" title="Instagram"><RiInstagramLine /></Link>
      <Link href={'https://www.facebook.com/inneobr'} target="_blank" className="hover:text-accent transition-all duration-300" title="Facebook"><RiFacebookLine /></Link>
      <Link href={'https://linkedin.com/in/inneobr'} target="_blank" className="hover:text-accent transition-all duration-300" title="Linkedin"><RiLinkedinLine /></Link>
      <Link href={'https://twitter.com/inneobr'} target="_blank" className="hover:text-accent transition-all duration-300" title="Twitter"><RiTwitterLine /></Link>
      <Link href={'https://github.com/inneobr'} target="_blank" className="hover:text-accent transition-all duration-300" title="Github"><RiGithubLine /></Link>
      <Link href={'https://wa.me/554699147716'} target="_blank" className="hover:text-accent transition-all duration-300" title="WhatsApp"><RiWhatsappLine /></Link>
      <Link href={'/curriculum.pdf'} target="_blank" className="hover:text-accent transition-all duration-300" title="Curriculum"><RiDownload2Line /></Link>
    </div>
  );
};

export default Socials;
