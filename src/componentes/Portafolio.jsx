import React from "react";
import "../estilos/Portafolio.css";
import ElementoPortafolio from "./ElementoPortafolio";

function Portafolio() {
  const proyectos = [
    {
      imagenPortada: require("../imagenes/por9.jpg"),
      titulo: "Herramienta de Automatización de Procesos de Infraestructura",
      url: "https://github.com/AntonioTorresMtz/numeros_pseudoaleatorios",
      imagenesCarrusel: [
        require("../imagenes/herramienta-1.jpg"),
        require("../imagenes/herramienta-2.jpg"),
        require("../imagenes/herramienta-3.jpg"),
        require("../imagenes/herramienta-4.jpg"),
        require("../imagenes/herramienta-5.jpg"),
      ],

      categoria: "Aplicación Web",
      tecnologias: "Vue js, Flask, MariaDB",
      fecha: "2023",
      descripcion:
        "Este proyecto fue diseñado para automatizar procesos de realiza el área de Infraestructura y telecomunicaciones" +
        " integrando diversos servicios, como lo son <strong>los switches, el firewall y el directorio activo.</strong>" +
        " El sitio fue creado para el uso del área de Infraestructura, Comunicaciones y Help Desk, por lo cual contaba con login y diferentes niveles de acceso." +
        " Entre las funciones principales destacan:" +
        "<br><br><strong>Creacion y eliminacion de usuarios en los switches:<br></strong>" +
        "Consiste en realizar conexiones a todas los switches de cada sucursal, para crear y eliminar de manera" +
        " automática un usuario específico en cada switch, correspondiente a cada sucursal. El trabajo que tomaba" +
        " hasta tres días de forma manual, ahora se reducía a 10 minutos." +
        "<br><br><strong>Consulta de Puertos Bloqueados</strong>" +
        "<br>Esta sección consiste en realizar una conexión a un switch en específico para consultar todos aquellos" +
        " puertos bloqueados, además de contar con la posibilidad de desbloquear el puerto o quitar el port-security." +
        "<br>Las acciones realizadas  de desbloqueo o quitar el port-security se guardan en una bitácora para que puedan" +
        " ser visualizadas por el administrador además de también poder generar un reporte en PDF." +
        "<br><br><strong>Consulta de Status de VPNs y Gateways</strong>" +
        "<br>Se realizaban conexiones al firewall para poder consultar el estado de las VPNs o Gateways," +
        " para saber si estaban activas o caídas, además de consultar información importante y " +
        "poder negociar las fases 1 y 2." +
        "<br><br><strong>Desbloquear Usuarios de Directorio Activo</strong>" +
        "<br>Se mostraba una lista de todos los usuarios que estaban bloqueados en Directorio Activo" +
        ", se los usuarios podían ser desbloqueados e incluso se permitía la opción en caso de que el usuario" +
        " no supiera la contraseña resetearla y poner una contraseña por defecto." +
        "<br>Estas acciones se guardaban en una bitácora que podía ser vista por el administrador del sitio, así como también" +
        " generar un reporte en formato PDF.",
    },
    {
      imagenPortada: require("../imagenes/por8.png"),
      titulo: "Directorio Interno de CMV",
      url: "https://github.com/AntonioTorresMtz/numeros_pseudoaleatorios",
      imagenesCarrusel: [
        require("../imagenes/directorio-1.jpg"),
        require("../imagenes/directorio-2.jpg"),
      ],
      categoria: "Aplicación Web",
      tecnologias: "Vue js, .NET, MariaDB",
      fecha: "2023",
      descripcion:
        "Esta aplicación web fue creada con el objetivo de fungir como un 'directorio', de manera " +
        "que fuera posible visualizar información interna de la empresa de manera rapida. Tal información era: " +
        "<strong> Extensiones de corporativo, Líneas telcel, Cajeros Automáticos y Sucursales. </strong>" +
        "<br> Anteriormente toda esta información estaba organizada y guardada dentro de un archivo excel, sin embargo " +
        "esto ocasiona que con cualquier cambio se debiera volver enviar el archivo excel a todas las personas" +
        " que necesiten contar con la información del archivo, lo cual provocaba desfase y trabajo repetitivo." +
        "<br><br>El sitio web contaba con la opción de crear, editar y borrar información de acuerdo a las necesidades de" +
        " la empresa, el sitio fue publicado dentro de la red interna del corporativo, para que cualquier usuario pudiera" +
        " consultar la información, sin embargo tambien se contaba con un login, de acuerdo al nivel de acceso que tuviera" +
        " el usuario se podia ver información de directivos y otras mas, que el usuario común (sin hacer login) no " +
        "veía. Finalmente existían usuario administradores que tenían acceso completo a la información y podían crear, editar, borrar registros.",
    },
    {
      imagenPortada: require("../imagenes/por7.jpg"),
      titulo: "Administrador para Negocio de Micas y Celulares",
      url: "https://github.com/AntonioTorresMtz/numeros_pseudoaleatorios",
      imagenesCarrusel: [
        require("../imagenes/micas-1.jpg"),
        require("../imagenes/micas-2.jpg"),
        require("../imagenes/micas-3.jpg"),
        require("../imagenes/micas-4.jpg"),
        require("../imagenes/micas-5.jpg"),
        require("../imagenes/micas-6.jpg"),
        require("../imagenes/micas-7.jpg"),
        require("../imagenes/micas-8.jpg"),
        require("../imagenes/micas-9.jpg"),
      ],
      categoria: "Aplicacion Web",
      tecnologias: "Bootstrap, Javascript, PHP, MySQL",
      fecha: "2022-Actualidad",
      descripcion:
        "Esta aplicación web, está diseñada para administrar el inventario de micas" +
        "(normal, completa, privacidad, cámara y curva) así como de protectores. <br> " +
        "El programa esta diseñado para encontrar de manera rápida el stock de un modelo de celular" +
        "(todas las micas y protectores), contando con información como cantidad, ubicación, medidas," +
        " compatibilidades y alguna nota particular. <br> Debido a que diversas micas (entiéndase el " +
        "cristal en si) le quedan a diversos modelos de celulares, ya sea de la misma marca o diferente, " +
        "es común dentro del negocio registrar compatibilidades de micas e incluso fundas, es por ello que" +
        " la base de datos está diseñada para guardar las compatibilidades de los diversos productos, tales compatiblidades" +
        " se pueden crear al agregar un producto o después de haberse agregado e incluso deshacer compatibilidades. " +
        " <strong> De este modo el programa ayuda a aquellos empleados nuevos a encontrar productos y no negar una posible venta. </strong>" +
        "<br> <br> Aunque el objetivo del programa fue el anterior descrito, se han agregado módulos como el llevar el inventario" +
        " de teléfonos celulares, desde agregarlo, venderlo y guardar toda esta información en la base de datos, así como dar al cliente su ticket de compra." +
        "<br> <br> Otro módulo agregado ha sido el registro de productos apartados así como los pagos" +
        " hechos hasta liquidar la deuda, además de ello por cada pago realizado se imprime un ticket con el" +
        " historial de pagos para el cliente.",
    },
    {
      imagenPortada: require("../imagenes/por10.jpg"),
      titulo:
        "Mantenimiento de Aplicacion Web para el control del Hadware de CMV",
      url: "https://github.com/AntonioTorresMtz/admin_villahass",
      imagenesCarrusel: [require("../imagenes/ciclos-1.jpg")],
      categoria: "Desarrollo Web",
      tecnologias: "Vue js, .NET, SQL Server",
      fecha: "2023",
      descripcion:
        "Participé en la creación de un sitio web que llevaba el ciclo de vida del hadware de la empresa" +
        " sin embargo mi rol principal en este proyecto fue quedar a cargo del mantenimiento del código, debido a que" +
        " el compañero que había programado la mayoría del proyecto, había cambiado de área. <br>" +
        "Mi rol fue implementar nuevas funcionalidades, tanto del frontend, backend y bases de datos, así como" +
        " corregir errores o agregar mejoras. <br>" +
        "Esto significó un reto nuevo y desafiante, pues implicaba leer codigo no escrito por mi, analizarlo, comprenderlo" +
        " y en base a eso, implementar mejores o corregir errores.",
    },
    {
      imagenPortada: require("../imagenes/por11.jpg"),
      titulo: "Extension de Google Chrome para la Impresion de Tickets",
      url: "https://github.com/AntonioTorresMtz/admin_villahass",
      imagenesCarrusel: [require("../imagenes/extencion-1.jpg")],
      categoria: "Desarrollo Web",
      tecnologias: "Javascript, Laravel",
      fecha: "2020",
      descripcion:
        "Esta extensión tiene como objetivo imprimir tickets de manera automática para la plataforma prontipagos" +
        ". Dicha plataforma es un punto de venta de recargas electrónicas, cada vez de se realiza una recarga el sitio " +
        "carga una pantalla de éxito, con la información de la venta y más abajo un botón para imprimir el ticket, sin embargo " +
        "la impresión es gestionada por el navegador, lo cual requiere seleccionar la impresora, ajustar parámetros de escalas y otros aspecto" +
        " que lo vuelven poco práctico.<br>" +
        "La intensión de la extensión era detectar cuándo se realizará una nueva recarga e imprimir un ticket de forma automática " +
        "de modo que no implique un esfuerzo para el usuario, pensando en personas que están poco familiarizadas con las computadoras." +
        "<br><br>La extension lee un componente HTML y extrae la información relevante de la venta cuando se carga la pantalla de venta exitosa " +
        "y encapsula la información en un JSON que envía a un API creada en Laravel, el cual guarda dicha información en una base de datos" +
        " (porque la plataforma 'Prontipagos' borra cada cierto tiempo los registros de ventas) e imprime un ticket de compra, para el cliente.",
    },
    {
      imagenPortada: require("../imagenes/por2.jpg"),
      titulo: "Inventario de Empaque de Aguacate",
      url: "https://github.com/AntonioTorresMtz/admin_villahass",
      imagenesCarrusel: [
        require("../imagenes/aguacate-1.jpg"),
        require("../imagenes/aguacate-2.jpg"),
        require("../imagenes/aguacate-3.jpg"),
        require("../imagenes/aguacate-4.jpg"),
        require("../imagenes/aguacate-5.jpg"),
      ],
      categoria: "Desarrollo Web",
      tecnologias: "HTML, CSS, Javascript, PHP, MySQL",
      fecha: "2020",
      descripcion:
        "Este sitio sirve para brindar el control de la compra y venta del aguacate a una empresa que se dedica a este giro. El sitio puede registrar las ventas y compras que se hacen, asi como dar seguimiento a todos los creditos que se tienen tanto a favor como en contra, cada compra o venta esta vinculada a un cliente y este tiene un historial de pagos. Ademas de las compras y ventas realizadas, el sistema registra los activos de la empresa y otros gastos de operaciones propios de cualquier empresa. Para ingresar se necesita un login y password. ",
    },
  ];

  return (
    <div className="contenedor-portafolio" id="proyectos">
      {proyectos.map((proyecto, index) => (
        <ElementoPortafolio key={index} proyecto={proyecto} />
      ))}
    </div>
  );
}

export default Portafolio;
