import "tailwindcss/tailwind.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./views/Layout.jsx";
import "./styles/global.css";
import Error from "./views/No-found/noFound";
import Services from "./views/ServicesPage/servicesPage.jsx";
import ServiceInfo from "./views/ServiceInfo/ServiceInfo.jsx";

import Home from "./views/Home/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="error" element={<Error />} />
          <Route path="*" element={<Navigate to="error" />} />
          <Route path="servicios">
            <Route index element={<Services />} />
            <Route path=":titleId" element={<ServiceInfo />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
