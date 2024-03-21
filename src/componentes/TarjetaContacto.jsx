import React from "react";
import "../estilos/TarjetaContacto.css"

function TarjetaContacto({ logo, titulo, texto }) {
  return (
    <div className="contenedor-hijos-contacto">
      <div className="contenedor-hijo-logo-contacto">{logo}</div>
      <div className="contenedor-hijo-texto-contacto">
        <p>
          <strong>{titulo}</strong>
        </p>
        <p>{texto}</p>
      </div>
    </div>
  );
}

export default TarjetaContacto;
