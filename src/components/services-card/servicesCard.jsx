import { BiMailSend } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";
function ServicesCard({ title, description, image }) {
  return (
    <>
      <article className="bg-darkgrey py-2 my-6 rounded-md">
        <h1 className="px-4 mb-3">{title}</h1>
        <img src={image} alt="" className="bg-white h-40" />
        <p className="px-4 my-4 text-softwhite">{description}</p>
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

ServicesCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default ServicesCard;
