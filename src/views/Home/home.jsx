import { BiCategory } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { FaFolder } from "react-icons/fa";
import ServicesCard from "../../components/services-card/servicesCard";
import ProjectsCard from "../../components/projects-card/projectsCard";
import Contact from "../../components/contact/contact";
import ServicesList from "../../db/servicesList";
import { useNavigate } from "react-router-dom";
import Social from "../../components/social/social";
import ProyectsList from "../../db/projectsList.js";
// import bg from "../../assets/backgrounds/logobg.png";

function Home() {
  const navigate = useNavigate();
  const url = "servicios";
  return (
    <>
      <div>
        <h1 className="bold-font text-[55px] text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secundary m-0 p-0">
          franma.dev
        </h1>
        <section className="flex mx-auto justify-center gap-4">
          <Social />
        </section>
        <section className="mt-3 text-center leading-5 text-[#CCCCCC]">
          <p>
            Desarrollo, diseño y maquetación de soluciones web, llevadas desde
            la idea al código.
          </p>
        </section>
      </div>
      <div>
        <section>
          <div className="flex mt-10 items-center place-content-between">
            <div className="flex   items-center gap-1">
              <BiCategory size="1.6rem" className="text-primary" />
              <h1 className="text-2xl ml-1 font-extrabold ">Servicios</h1>
            </div>
            <div>
              {" "}
              <button
                className="bg-primary pl-3 pr-2 py-1 rounded-md flex items-center gap-1 text-white"
                onClick={() => navigate(`/${url}`)}
              >
                Ver más servicios <IoIosArrowForward />
              </button>
            </div>
          </div>
          <div>
            {ServicesList.map((service, i) => (
              <div key={i}>
                <ServicesCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  titleId={service.titleId}
                />
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="flex mt-14 items-center place-content-between">
            <div className="flex   items-center gap-1">
              <FaFolder size="1.6rem" className="text-primary" />
              <h1 className="text-2xl ml-1 font-extrabold">Proyectos</h1>
            </div>
            <div>
              {" "}
              <button className="bg-primary pl-3 pr-2 py-1 rounded-md flex items-center gap-1">
                Ver más proyectos <IoIosArrowForward />
              </button>
            </div>
          </div>
          <div>
            {ProyectsList.map((pro, index) => (
              <div key={index}>
                <ProjectsCard project={pro} />
              </div>
            ))}
          </div>
        </section>
        <section>
          <Contact />
        </section>
      </div>
    </>
  );
}

export default Home;
