import "./navbar.css";
import { BiUserPin, BiAdjust } from "react-icons/bi";
import "tailwindcss/tailwind.css";
import logoFranma from "./logo_blue.png";

function Navbar() {
  return (
    <>
      <div className="place-content-between flex bg-[#202225] px-5 md:px-10 py-3 mt-5 mb-3 rounded-md items-center ">
        <div>
          <img src={logoFranma} alt="" className="h-[1.6rem]" />
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
