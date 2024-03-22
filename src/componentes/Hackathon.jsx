import React from "react";
import "../estilos/Hackathon.css";
import fotoHackathon from "../imagenes/Hackathon.png";

function Hackathon() {
  const visitarCodigo = () => {
    window.open(
      "https://mimorelia.com/noticias/educacion/tecnol%C3%B3gico-de-morelia-segundo-lugar-en-competencia-de-ciberseguridad-hackathon-2022"
    );
  };
  return (
    <section className="contenedor-principal-hackathon">
      <div>
        <h3>Segundo Lugar en Hackathon 2022 Captura la Bandera, Uruapan</h3>
      </div>
      <article className="contenedor-cuerpo-hackathon">
        <div className="contenedor-imagen-hackathon">
          <img
            src={fotoHackathon}
            alt="Foto ganadores Hackathon 2022, Uruapan"
          />
        </div>
        <div className="contenedor-texto-hackathon">
          <p>
            En 2022, junto con mis compañeros Juan Manuel Garcia, Leobardo Perez
            y Eduardo Edwin Baltazar, participamos en la primera edicion del
            Hackathon Uruapan, Michoacan, donde obtuvimos el Segundo Lugar.
            <br />
            La competencia de Hacking consistia en un reto de captura a la
            bandera, en el cual debiamos vulnerar dos maquinas virtuales; un
            Ubuntu Server y un Windows Server.
            <br />
            Para vulnerar el servidor ubuntu, utilizamos diversas herramientas
            de escaneo desde un equipo con Kali Linux, entre las que destacaban
            nmap, para el escaneo de puertos, nikto para analisis de
            vulnerabilidades, gracias a este ultimo detectamos que el servidor
            utilizaba un wordpress, con lo cual utilizamos otra herramienta:
            WPScan. WPScan sirve para realizar un escaneo de vulnerabilidades en
            wordpress, con ella encontramos la vulnerabilidad CVE-2018-15610 y
            por medio de metasploit conseguia atacatar esa vulnerabilidad y
            escalar privilegios, en donde encontramos diversas banderas.
            <br />
            Nota de Mi Morelia.com:{" "}
            <span onClick={visitarCodigo} className="enlace"> Visitar </span>
          </p>
        </div>
      </article>
    </section>
  );
}

export default Hackathon;
