import Link from "next/link";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link href={'/portfolio'} 
      className="relative w-[185px] h-[50px] flex justify-center items-center 
      bg-cover bg-center bg-no-repeat group bnt rounded-full border border-white/50 hover:text-accent hover:border-accent">
        Trabalhos
      </Link>
    </div>
  );
};

export default ProjectsBtn;
