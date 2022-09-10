import { BiCode, BiShare } from "react-icons/bi";
import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoReact,
  IoLogoGithub,
} from "react-icons/io5";
function ProjectsCard() {
  return (
    <>
      <article className="bg-grey pb-2 my-6 rounded-md shadow-lg">
        <div className="relative">
          <div>
            <img src="" alt="" className="bg-white h-40 rounded-t-md" />
          </div>
          <div className="flex absolute bottom-1 right-3 gap-2">
            <button className="flex items-center gap-1 rounded-md text-white bg-slate-600 pr-[8px] pl-[6px] py-[3px]">
              <BiCode size="1.3rem" /> Código
            </button>
            <button className="flex items-center gap-2 rounded-md text-white bg-slate-600 pr-[8px] pl-[6px] py-[3px]">
              <BiShare style={{ transform: "scaleX(-1)" }} /> Ir al sitio
            </button>
          </div>
        </div>
        <h1 className="px-4 mt-3 text-white font-semibold">
          Título del servicio
        </h1>
        <p className="px-4 my-3 text-softwhite">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui provident
          recusandae veritatis quod debitis aliquid.
        </p>
        <div className=" flex px-4 gap-2 mb-2">
          {/* Remplace whit statics assets */}
          <IoLogoCss3 size="2rem" />
          <IoLogoJavascript size="2rem" />
          <IoLogoReact size="2rem" />
          <IoLogoGithub size="2rem" />
        </div>
      </article>
    </>
  );
}

export default ProjectsCard;
