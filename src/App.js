import "tailwindcss/tailwind.css";
import Home from "./views/Home/home";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import "./styles/global.css";

function App() {
  return (
    <>
      <div className="max-w-screen-xl md:mx-auto  mx-4">
        <Navbar />
        <Home />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
