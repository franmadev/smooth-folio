import "./navbar.css";
import { BiUserPin, BiAdjust } from "react-icons/bi";
import "tailwindcss/tailwind.css";
import logoFranma from "./logo_blue.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="place-content-between flex px-5 md:px-10 py-3 mt-5 mb-3 rounded-md items-center shadow-xl md:mx-auto mx-4 ">
        <div>
          <img
            src={logoFranma}
            alt=""
            className="h-[1.6rem]"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="flex gap-4">
          <BiAdjust size="1.6rem" />
          <BiUserPin size="1.6rem" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
