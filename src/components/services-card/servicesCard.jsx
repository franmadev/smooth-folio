import { BiMailSend } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
function ServicesCard() {
  return (
    <>
      <article className="bg-darkgrey py-2 my-6 rounded-md">
        <h1 className="px-4 mb-3">Título dle servicio</h1>
        <img src="" alt="" className="bg-white h-40" />
        <p className="px-4 my-4 text-softwhite">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui provident
          recusandae veritatis quod debitis aliquid.
        </p>
        <div className="place-content-between flex px-4">
          <div>
            <BiMailSend size="1.7rem" color="#218bd7" />
          </div>
          <div>
            <button className="flex items-center gap-2 rounded-md ">
              Ver más <IoIosArrowForward />
            </button>
          </div>
        </div>
      </article>
    </>
  );
}

export default ServicesCard;
