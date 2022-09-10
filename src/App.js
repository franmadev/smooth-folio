import "tailwindcss/tailwind.css";
import Home from "./views/Home/home";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import GoTop from "./components/gotop/gotop";
import "./styles/global.css";

function App() {
  return (
    <>
      <div className="max-w-screen-xl md:mx-auto  mx-4">
        <Navbar />
        <Home />
      </div>
      <GoTop />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
