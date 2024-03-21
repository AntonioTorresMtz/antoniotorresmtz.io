import React from "react";
import "../estilos/Tecnologias.css";
import TarjetaTecnologias from "./TarjetaTecnologias";
import { FaJava } from "react-icons/fa";
import { BiLogoPython } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { SiMariadbfoundation } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { FaLinux } from "react-icons/fa6";
import { GrVmware } from "react-icons/gr";
import { SiVirtualbox } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiGimp } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";

function Tecnologias() {
  const tecnologias = [
    {
      titulo: "Lenguajes",
      listaTecnologias: [
        {
          nombre: "Java",
          logo: <FaJava />,
        },
        {
          nombre: "C#",
          logo: <SiCsharp />,
        },
        {
          nombre: "Python",
          logo: <BiLogoPython />,
        },
        {
          nombre: "Javascript",
          logo: <BiLogoJavascript />,
        },
        {
          nombre: "PHP",
          logo: <SiPhp />,
        },
      ],
    },
    {
      titulo: "Base de datos",
      listaTecnologias: [
        {
          nombre: "MySQL",
          logo: <SiMysql />,
        },
        {
          nombre: "SQL Server",
          logo: <DiMsqlServer />,
        },
        {
          nombre: "Maria DB",
          logo: <SiMariadbfoundation />,
        },
      ],
    },
    {
      titulo: "Frameworks",
      listaTecnologias: [
        {
          nombre: "Vue js",
          logo: <FaVuejs />,
        },
        {
          nombre: "React js",
          logo: <FaReact />,
        },
        {
          nombre: "Flask",
          logo: <SiFlask />,
        },
        {
          nombre: "Laravel",
          logo: <FaLaravel />,
        },
      ],
    },
    {
      titulo: "Seguridad",
      listaTecnologias: [
        {
          nombre: "Linux",
          logo: <FaLinux />,
        },
        {
          nombre: "VMWare",
          logo: <GrVmware />,
        },
        {
          nombre: "Virtual Box",
          logo: <SiVirtualbox />,
        },
      ],
    },
    {
      titulo: "Diseño",
      listaTecnologias: [
        {
          nombre: "Adobe XD",
          logo: <SiAdobexd />,
        },
        {
          nombre: "Adobe Ilustrator",
          logo: <SiAdobeillustrator />,
        },
        {
          nombre: "Adobe Photoshop",
          logo: <SiAdobephotoshop />,
        },
        {
          nombre: "Gimp",
          logo: <SiGimp />,
        },
      ],
    },
  ];
  return (
    <div className="contenedor-principal-tecnologias">
      <TarjetaTecnologias tecnologias={tecnologias} />
    </div>
  );
}

export default Tecnologias;
