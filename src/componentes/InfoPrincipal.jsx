import React from "react";
import "../estilos/InfoPrincipal.css";
import foto from "../imagenes/foto.png";

function InfoPrincipal() {
  return (
    <div className="contenedor-infoprincipal" id="sobre">
      <div className="imagen-infoprincipal">
        <img src={foto} alt="" />
      </div>
      <div className="texto-infoprincipal">
        <h1>Antonio Torres Martinez</h1>
        <h2>Ingeniero en Sistemas Computacionales</h2>
        <p>
          ¡Hola! Soy Antonio Torres Martinez, egresado de la carrera de
          Ingenieria en Sistemas Computacionales por el Instituto Tecnologico de
          Morelia, con la especialidad en Seguridd de la Información.
          <br />
          Me apasiona la seguridad informatica, el desarrollo de software y las
          bases de datos, siempre estoy en busqueda de crear soluciones que
          automaticen tareas con ayuda de la programación.
        </p>
      </div>
    </div>
  );
}

export default InfoPrincipal;
