import { SiLinkedin, SiDiscord, SiTwitter, SiGithub } from "react-icons/si";
import { BiCategory } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

function Home() {
  return (
    <>
      <div className="">
        <h1 className="bold-font text-[55px] text-center text-transparent bg-clip-text bg-gradient-to-r from-[#218BD7] to-[#BB65E3] m-0 p-0">
          franma.dev
        </h1>
        <section className="flex mx-auto justify-center gap-4">
          <SiLinkedin size="1.5rem" />
          <SiDiscord size="1.5rem" />
          <SiTwitter size="1.5rem" />
          <SiGithub size="1.5rem" />
        </section>
        <section className="mt-3 text-center leading-5 text-[#CCCCCC]">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem, animi. Necessitatibus temporibus.
          </p>
        </section>
      </div>
      <div>
        <section>
          <div className="flex mt-10 items-center place-content-between">
            <div className="flex   items-center">
              <BiCategory size="1.6rem" color="#B667E3" />
              <h1 className="text-2xl ml-1">Servicios</h1>
            </div>
            <div>
              {" "}
              <button className="bg-[#218BD7] pl-3 pr-2 py-1 rounded-md flex items-center gap-1">
                Ver más servicios <IoIosArrowForward />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
