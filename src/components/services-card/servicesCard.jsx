// import { BiMailSend } from "react-icons/bi";
// import { IoIosArrowForward } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
function ServicesCard({ title, description, image, titleId }) {
  const navigate = useNavigate();
  return (
    <>
      <article className="bg-grey py-3 my-6 rounded-md shadow-lg flex ">
        <div className="w-[100%] relative">
          <h1 className="px-4 font-semibold">{title}</h1>
          <p className="px-4 text-softwhite w-[100%] ">{description}</p>
          <div className="place-content-between flex px-4">
            <div></div>
            <div>
              <button
                onClick={() => navigate(`/servicios/${titleId}`)}
                className="flex items-center gap-2 rounded-md text-primary"
              >
                Ver más <BsArrowRight />
              </button>
            </div>
          </div>
          <div className="place-content-between flex px-4 absolute bottom-0 right-0"></div>
        </div>
      </article>
    </>
  );
}

ServicesCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  titleId: PropTypes.string,
};

export default ServicesCard;
