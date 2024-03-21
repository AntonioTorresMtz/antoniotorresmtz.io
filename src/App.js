import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import InfoPrincipal from "./componentes/InfoPrincipal";
import Portafolio from "./componentes/Portafolio";
import Contacto from "./componentes/Contacto";
import Titulos from "./componentes/Titulos";
import Tecnologias from "./componentes/Tecnologias";
import Footer from "./componentes/Footer";
import Navbar from "./componentes/Navbar";

function App() {
  return (
    <div className="contenedor-principal">
      <BrowserRouter>
        <Navbar />
        <Routes>
        
        </Routes>
      </BrowserRouter>
      <InfoPrincipal />
      <Titulos titulo={"Proyectos"} />
      <Portafolio />
      <Titulos titulo={"Contacto"} />
      <Contacto />
      <Titulos titulo={"Lenguajes y Tecnologias"} />
      <Tecnologias />
      <Footer />
    </div>
  );
}

export default App;
