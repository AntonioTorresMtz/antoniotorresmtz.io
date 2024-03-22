import "./App.css";
import InfoPrincipal from "./componentes/InfoPrincipal";
import Portafolio from "./componentes/Portafolio";
import Contacto from "./componentes/Contacto";
import Titulos from "./componentes/Titulos";
import Tecnologias from "./componentes/Tecnologias";
import Footer from "./componentes/Footer";
import Encabezado from "./componentes/Encabezado";
import Hackathon from "./componentes/Hackathon";

function App() {
  return (
    <>
      <Encabezado />
      <div className="contenedor-principal">
        <InfoPrincipal />
        <Titulos titulo={"Proyectos"} />
        <Portafolio />
        <Hackathon />
        <Titulos titulo={"Contacto"} />
        <Contacto />
        <Titulos titulo={"Lenguajes y Tecnologias"} />
        <Tecnologias />
        <Footer />
      </div>
    </>
  );
}

export default App;
