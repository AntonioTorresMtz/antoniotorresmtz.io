import React from "react";
import "../estilos/ModalProyecto.css";
import Modal from "react-modal";
import { IoIosClose } from "react-icons/io";
import CarruselModal from "./CarruselModal";
import DescripcionModal from "./DescripcionModal";
Modal.setAppElement('#root');
function ModalProyecto({ isOpen, onRequestClose, proyecto }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const modalClassName = isOpen
    ? "contenedor-modal-proyecto modal-open"
    : "contenedor-modal-proyecto";
  return (
    <Modal
      className={modalClassName}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <div className="encabezado-modal">
        <h2>{proyecto.titulo}</h2>
        <IoIosClose onClick={onRequestClose} className="encabezado-boton-cierre" />
      </div>

      <CarruselModal
        className="contenedor-modal-imagenes"
        imagenesCarrusel={proyecto.imagenesCarrusel}
      />
      <DescripcionModal
        className="contenedor-modal-texto"
        proyecto={proyecto}
      />
    </Modal>
  );
}

export default ModalProyecto;
