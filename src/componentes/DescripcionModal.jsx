import React from "react";
import "../estilos/DescripcionModal.css";

function DescripcionModal({ proyecto }) {
  const visitarCodigo = () => {
    window.open(proyecto.url);
  };

  return (
    <div className="contenedor-modal-texto">
      <h3>Informacion del Proyecto</h3>
      <ul>
        <li>
          <strong>Categoría</strong>: {proyecto.categoria}
        </li>
        <li>
          <strong>Lenguaje</strong>: {proyecto.tecnologias}
        </li>
        <li>
          <strong>Fecha de Proyecto</strong>: {proyecto.fecha}
        </li>
        <li>
          <strong>Código fuente</strong>:{" "}
          <span onClick={visitarCodigo}> Ver </span>
        </li>
      </ul>

      <p dangerouslySetInnerHTML={{ __html: proyecto.descripcion }}></p>
    </div>
  );
}

export default DescripcionModal;
