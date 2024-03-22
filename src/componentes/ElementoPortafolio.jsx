import React, { useState } from "react";
import "../estilos/ElementoPortafolio.css";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosAttach } from "react-icons/io";
import ModalProyecto from "./ModalProyecto";

function ElementoPortafolio({ proyecto }) {
  const [modalAbierto, setModalAbierto] = useState(false);

  const abrirModal = () => {
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  const visitarCodigo = () => {
    window.open(proyecto.url);
  };

  return (
    <section className="contenedor-elemento-portafolio">
      <div className="contenedor-elemento-imagen-portafolio">
        <img
          className="imagen-elemento-portafolio"
          src={proyecto.imagenPortada}
          alt="Imagen de Portada portafolio"
        />
      </div>
      <div className="contenedor-elemento-texto-portafolio">
        <div className="contenedor-elemento-texto-titulo-portafolio">
          <p>{proyecto.titulo}</p>
        </div>
        <div className="contenedor-elemento-texto-iconos-portafolio">
          <IoIosAddCircle className="elemento-icono" onClick={abrirModal} />
          <ModalProyecto
            isOpen={modalAbierto}
            onRequestClose={cerrarModal}
            proyecto={proyecto}
          />
          <IoIosAttach className="elemento-icono" onClick={visitarCodigo} />
        </div>
      </div>
    </section>
  );
}

export default ElementoPortafolio;
