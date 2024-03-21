import React from "react";
import "../estilos/Titulos.css";

function Titulos({ titulo }) {
  return (
    <div className="contenedor-titulo">
      <h3>{titulo}</h3>
    </div>
  );
}

export default Titulos;
