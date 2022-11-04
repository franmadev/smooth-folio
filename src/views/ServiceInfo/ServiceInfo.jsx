import logo from "../../assets/icons/logo/logo_blue.png";
import Social from "../../components/social/social";
import Contact from "../../components/contact/contact";
import { useParams } from "react-router-dom";
function ServiceInfo() {
  const { titleId } = useParams();
  return (
    <>
      <section className="mt-14 mb-14">
        <div className="flex items-center mx-auto justify-center  mt-10 mb-5">
          <img src={logo} alt="" className="h-14 items-center" />
          <h1 className="bold-font text-[45px] text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secundary m-0 p-0">
            {titleId}
          </h1>
        </div>
        <Social />
      </section>
      <div></div>
      <section className="mb-16">
        <Contact />
      </section>
    </>
  );
}

export default ServiceInfo;
