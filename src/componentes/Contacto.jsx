import React from "react";
import "../estilos/Contacto.css";
import TarjetaContacto from "./TarjetaContacto";
import { MdPinDrop } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

function Contacto() {
  const visitarGithub = () => {
    window.open("https://github.com/AntonioTorresMtz/");
  };
  const visitarLinkin = () => {
    window.open("https://www.linkedin.com/in/antoniotorresmtz/");
  };
  return (
    <div className="contenedor-principal-contacto" id="contacto">
      <TarjetaContacto
        logo={<MdPinDrop />}
        titulo={"Residencia:"}
        texto={"Morelia, Michoacan"}
      />
      <div className="contenedor-hijos-contacto">
        <div className="contenedor-hijo-logo-contacto">
          <IoShareSocial />
        </div>
        <div className="contenedor-hijo-texto-contacto">
          <p>
            <strong>Redes Sociales:</strong>
          </p>
          <p onClick={visitarGithub} className="visitar">
            <FaGithub />
          </p>
          <p onClick={visitarLinkin} className="visitar">
            <FaLinkedin />
          </p>
        </div>
      </div>
      <TarjetaContacto
        logo={<IoMail />}
        titulo={"Correo:"}
        texto={"antoma.t.b@gmail.com"}
      />
      <TarjetaContacto
        logo={<FaPhoneAlt />}
        titulo={"Telefono:"}
        texto={"425-118-1587"}
      />
    </div>
  );
}

export default Contacto;
