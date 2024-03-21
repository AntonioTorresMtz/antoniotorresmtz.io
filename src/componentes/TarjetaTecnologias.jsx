import React from "react";
import "../estilos/TarjetaTecnologias.css";

function TarjetaTecnologias({ tecnologias }) {
  return (
    <>
      {tecnologias.map((tecnologia, index) => (
        <div className="contenedor-tarjeta-tecnologias" key={index}>
          <div className="contenedor-titulo-tarjeta">
            <p className="titulo-tecnologias">{tecnologia.titulo}</p>
          </div>
          <div className="contenedor-listado-tarjeta">
            {tecnologia.listaTecnologias.map(
              (listadoTecnologia, indexTecnologia) => (
                <div className="listado" key={indexTecnologia}>
                  {listadoTecnologia.logo} 
                  <p> {listadoTecnologia.nombre} </p>
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default TarjetaTecnologias;
