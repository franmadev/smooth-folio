import logo from "../../assets/icons/logo/logo_blue.png"
import Social from "../../components/social/social"
import Contact from "../../components/contact/contact"
import { HiOutlineDocumentSearch, HiOutlineDocumentText, HiOutlineFire, HiOutlineChevronDown, HiOutlineLightBulb } from "react-icons/hi";
import { TbStepInto } from "react-icons/tb";
import bg from "../../assets/backgrounds/macos.jpg"

function Maquetacion() {
  return (
    <>
      <div className="md:mx-auto mx-4">
        <section className="mt-14 mb-14">
          <div className="flex items-center mx-auto justify-center  mt-10 mb-5">
            <img src={logo} alt="" className="h-14 items-center" />
            <h1 className="bold-font text-[45px] text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secundary m-0 p-0">
              maquetación
            </h1>
          </div>
          <Social />
        </section>
        <div>
          <p className="text-justify">La maquetación web transforma tu diseño en código (html, css y js). Esto permite visualizar, navegar e interactuar con el proyecto desde el navegador como un usuario final. </p>
        </div>
      </div>

      <section className=" mt-5 mx-3">

        <div className="flex font-extrabold pl-2 pt-4 mb-4">
          <TbStepInto size="2rem" className="text-primary" />
          <h1 className="text-2xl ml-1">Pasos</h1>
        </div>

        <div className="flex bg-grey rounded-md px-3 py-[9px] my-3 items-center place-content-between">
          <div className="flex items-center">
            <div className="bg-grey mr-3">
              <HiOutlineDocumentSearch size="2.3rem" className="text-primary" />
            </div>
            <div>Análisis del proyecto</div>
          </div>
          <div className="items-center"><HiOutlineChevronDown className="text-primary font-bold" size="1.2rem" /></div>
        </div>

        <div className="flex bg-grey rounded-md px-3 py-[9px] my-3 items-center place-content-between">
          <div className="flex items-center">
            <div className="bg-grey mr-3">
              <HiOutlineDocumentText size="2.3rem" className="text-softgrey" />
            </div>
            <div>Prototipado</div>
          </div>
          <div className="items-center"><HiOutlineChevronDown className="text-primary font-bold" size="1.2rem" /></div>
        </div>

        <div className="flex bg-grey rounded-md px-3 py-[9px] my-3 items-center place-content-between">
          <div className="flex items-center">
            <div className="bg-grey mr-3">
              <HiOutlineDocumentSearch size="2.3rem" className="text-primary" />
            </div>
            <div>Revisión</div>
          </div>
          <div className="items-center"><HiOutlineChevronDown className="text-primary font-bold" size="1.2rem" /></div>
        </div>

        <div className="flex bg-grey rounded-md px-3 py-[9px] my-3 items-center place-content-between">
          <div className="flex items-center">
            <div className="bg-grey mr-3">
              <HiOutlineDocumentText size="2.3rem" className="text-softgrey" />
            </div>
            <div>Maquetación</div>
          </div>
          <div className="items-center"><HiOutlineChevronDown className="text-primary font-bold" size="1.2rem" /></div>
        </div>

        <div className="flex bg-grey rounded-md px-3 py-[9px] my-3 items-center place-content-between">
          <div className="flex items-center">
            <div className="bg-grey mr-3">
              <HiOutlineFire size="2.3rem" className="text-secundary" />
            </div>
            <div>Entrega</div>
          </div>
          <div className="items-center"><HiOutlineChevronDown className="text-secundary font-bold" size="1.2rem" /></div>
        </div>

      </section>
      <section className="flex rounded-md   my-3 items-center mt-5 mx-3  place-content-center pr-2 py-4" style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}>
          <HiOutlineLightBulb size="2rem" className="text-softwhite" />
          <h1 className="text-2xl ml-1 text-softwhite">Quiero este servicio</h1>

      </section>
      <section className="mb-16 md:mx-auto mx-4">
        <Contact />
      </section>
    </>
  )
}

export default Maquetacion