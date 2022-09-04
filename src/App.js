import "tailwindcss/tailwind.css";
import Home from "./views/Home/home";
import Navbar from "./components/navbar/navbar";
import "./styles/global.css";

function App() {
  return (
    <div className="max-w-screen-xl md:mx-auto  mx-4">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
