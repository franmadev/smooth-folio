import { BiMailSend } from "react-icons/bi";
// import { IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";
function ServicesCard({ title, description, image }) {
  return (
    <>
      <article className="bg-grey py-2 my-6 rounded-md shadow-lg">
        <h1 className="px-4 mb-3 font-semibold">{title}</h1>
        <div className="bg-white h-40 overflow-hidden">
          <img src={image} alt="" className="w-[100%]" />
        </div>

        <p className="px-4 my-4 text-softwhite">{description}</p>
        <div className="place-content-between flex px-4">
          <div>
            <BiMailSend size="1.7rem" className="text-softwhite" />
          </div>
          <div>
            <button className="flex items-center gap-2 rounded-md text-primary">
              Ver más +
            </button>
          </div>
        </div>
      </article>
    </>
  );
}

ServicesCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default ServicesCard;
