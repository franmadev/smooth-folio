import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import GoTop from "../components/gotop/gotop";
import Footer from "../components/footer/footer";
import { useEffect, useState } from "react";

import bg from "../assets/backgrounds/logobg2.png";

function Layout() {
  const [is404, setIs404] = useState(false);
  const location = useLocation();
  useEffect(() => {
    console.log();
    if (location.pathname === "/error") {
      setIs404(true);
    }
  }, [location]);
  return (
    <>
      <div
        className=""
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-screen-xl min-h-screen">
          
          <p className="text-white"></p>
          <Navbar />
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
      {!is404 && <GoTop />}

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
