import React from "react";
import "../estilos/Portafolio.css";
import ElementoPortafolio from "./ElementoPortafolio";

function Portafolio() {
  const proyectos = [
    {
      imagenPortada: require("../imagenes/por9.jpg"),
      titulo: "Herramienta de Automatización de Procesos de Infraestructura",
      url: "https://github.com/AntonioTorresMtz/numeros_pseudoaleatorios",
      imagenesCarrusel: [require("../imagenes/herramienta-1.jpg")],
      categoria: "Aplicacion Web",
      tecnologias: "Vue js, Flask, MariaDB",
      fecha: "2023",
      descripcion:
        "Este proyecto fue diseñado para automatizar procesos de realiza el area de Infraestructura y telecomunicaiones" +
        "integrando diversos servicios, como lo son <strong>los switches, el firewall y el directorio activo.</strong>" +
        " El sitio fue creado para el uso del area de Infraestructura, Comunicaciones y Help Desk, por lo cual contaba con login y diferentes niveles de acceso." +
        " Entre las funciones principales destacan:" +
        "<br><br><strong>Creacion y eliminacion de usuarios en los switches:<br></strong>" +
        "Consistia en realizar conexiones a todas los switches de cada sucursal, para crear y eliminar de manera" +
        " automatica un usuario especifico en cada switch, correspondiente a cada sucursal. El trabajo que tomaba" +
        " hasta tres dias de forma manual, ahora se reducia a 10 minutos." +
        "<br><br><strong>Consulta de Puertos Bloqueados</strong>" +
        "<br>Esta seccion consistia en realizar una conexin a un switch en especifico para consultar todos aquellos" +
        " puertos bloqueados, ademas de contar con la posibilidad de desbloquear el puerto o quitar el port-security." +
        "<br>Las acciones realizadas  de desbloqueo o quitar el port-security se guardan en una bitacora para que puedan" +
        " ser visualizados por el administrador ademas de tambien poder generar un reporte en PDF." +
        "<br><br><strong>Consulta de Status de VPNs y Gateways</strong>" +
        "<br>Se realizaba conexiones al firewall para poder consultar el estado de las VPNs o Gateways," +
        " para saber si estaban activas o caidas, ademas de consultar información importante y " +
        "poder negociar las fases 1 y 2." +
        "<br><br><strong>Desbloquear Usuarios de Directorio Activo</strong>" +
        "<br>Se mostraba una lista de todos los usuarios que estaban bloqueados en Directorio Activo" +
        ", se los usuarios podian ser desbloqueados e incluso se permitia la opcion en caso de que el usuario" +
        "no supiera la contraseña resetearla y poner una contraseña por defecto." +
        "<br>Estas acciones se guardaban en una bitacora que podia ser vista por el administrador del sitio, asi como tambien" +
        "generar un reporte en formato PDF.",
    },
    {
      imagenPortada: require("../imagenes/por8.png"),
      titulo: "Directorio Interno de CMV",
      url: "https://github.com/AntonioTorresMtz/numeros_pseudoaleatorios",
      imagenesCarrusel: [
        require("../imagenes/directorio-1.jpg"),
        require("../imagenes/directorio-2.jpg"),
      ],
      categoria: "Aplicacion Web",
      tecnologias: "Vue js, .NET, MariaDB",
      fecha: "2023",
      descripcion:
        "Esta aplicacion web fue creada con el objetivo de fungir como un 'directorio', de manera" +
        "que fuera posible visualizar información interna de la empresa de manera rapida. Tal informacion era: " +
        "<strong> Extensiones de corporativo, Lineas telcel, Cajeros Automaticos y Sucursales. </strong>" +
        "<br> Anteriormente toda esta informacion estaba organizada y guardada dentro de un archivo excel, sin embargo" +
        "esto ocasionaba que con cualquier cambio se debiera volver enviar el archivo excel a todas las personas" +
        "que necesiten contar con la informacion del archivo, lo cual provocaba desface y trabajo repetitivo." +
        "<br><br>El sitio web contaba con la opcion de crear, editar y borrar informacion de acuerdo a las necesidades de" +
        " la empresa, el sitio fue publicado dentro de la red interna del corporativo, para que cualquier usuario puediera" +
        "consultar la información, sin embargo tambien se contaba con un login, de acuerdo al nivel de acceso que tuviera" +
        "el usuario se podia ver informacion de directivos y otras mas, que el usuario común (sin hacer login) no " +
        "veía. Finalmente existian usuario administradores que tenian acceso completo a la información y podian crear, editar, borrar registros.",
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
        "Esta aplicación web, esta diseñada para administrar el inventario de micas" +
        "(normal, completa, privacidad, camara y curva) así como de protectores. <br> " +
        "El programa esta diseñado para encontrar de manera rapida el stock de un modelo de celular" +
        "(todas las micas y protectores), contando con informacion como cantidad, ubicacion, medidas," +
        " compatibilidades y alguna nota particular. <br> Debido a que diversas micas (entiendase el " +
        "crsital en si) le quedan a diversos modelos de celulares, ya sea de la misma marca o diferente, " +
        "es común dentro del negocio registrar compatibilidades de micas e incluso fundas, es por ello que" +
        " la base de datos esta diseñada para guardar las compatiblidades de los diversos productos, tales compatiblidades" +
        " se pueden crear al agregar un producto o despues de haberse agregado e incluso deshacer compatiblidades. " +
        " <strong> De este modo el programa ayuda a aquellos empleados nuevos a encontrar productos y no negar una posible venta. </strong>" +
        "<br> <br> Aunque el objetivo del programa fue el anterior descrito, se han agregado modulos como el llevar el inventario" +
        "de telefonos celulares, desde agregarlo, venderlo y guardar toda esta informacion en la base de datos, asi como dar al cliente su ticket de compra." +
        "<br> <br> Otro modulo agregado ha sido el registro de productos apartados así como los pagos" +
        "hechos hasta liquidar la deuda, ademas de ello por cada pago realizado se imprime un ticket con el" +
        "historial de pagos para el cliente",
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
        "Participe en la creacion de un sitio web que llevaba el ciclo de vida del hadware de la empresa" +
        "sin embargo mi rol principal en este proyecto fue quedar a cargo del mantenimiento del codigo, debido a que" +
        " el compañero que había programado la mayoría del proyecto, había cambiado de area. <br>" +
        "Mi rol fue implementar nuevas funcionalidades, tanto del frontend, backend y bases de datos, así como" +
        " corregir errores o agregar mejoras. <br>" +
        "Esto significo un reto nuevo y desafiante, pues implicaba leer codigo no escrito por mi, analizarlo, comprenderlo" +
        "y en base a eso, implementar mejores o corregir errores",
    },
    {
      imagenPortada: require("../imagenes/por11.jpg"),
      titulo: "Extension de Google Chrome para la Impresion de Tickets",
      url: "https://github.com/AntonioTorresMtz/admin_villahass",
      imagenesCarrusel: [
        require("../imagenes/extencion-1.jpg"),
      ],
      categoria: "Desarrollo Web",
      tecnologias: "Javascript, Laravel",
      fecha: "2020",
      descripcion:
        "Esta extension tiene como objetivo imprimir tickets de manera automatica para la plataforma prontipagos"+
        ". Dicha plataforma es un punto de venta de recargas electronicas, cada vez de se realiza una recarga el sitio "+
        "carga una pantalla de exito, con la informacion de la venta y mas abajo un boton para imprimir el ticket, sin embargo "+
        "la impresion es gestionada por el navegador, lo cual requiere seleccionar la impresora, ajustar parametros de escalas y otros aspecto"+
        " que lo vuelven poco practico.<br>"+
        "La intension de la extension era detectar cuando se realizara una nueva recarga e imprimir un ticket de forma automatica "+
        "de modo que no implique un esfuerzo para el usuario, pensando en personas que estan poco familiarizadas con las computadoras."+
        "<br><br>La extension lee un componente HTML y extrae la informacion relevante de la venta cuando se carga la pantalla de venta exitosa "+
        "y encapsula la informacion en un JSON que envia a un API creada en Laravel, el cual guarda dicha informacion en una base de datos"+
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
    {
      imagenPortada: require("../imagenes/por3.jpg"),
      titulo: "Algoritmos para la Creacion de Numeros Aleatorios",
      url: "https://github.com/AntonioTorresMtz/numeros_pseudoaleatorios",
      imagenesCarrusel: [
        require("../imagenes/aleatorio-1.jpg"),        
        require("../imagenes/aleatorio-2.jpg"),
        require("../imagenes/aleatorio-3.jpg"),        
        require("../imagenes/aleatorio-4.jpg"),
        require("../imagenes/aleatorio-5.jpg"),        
        require("../imagenes/aleatorio-6.jpg"),
        require("../imagenes/aleatorio-7.jpg"),        
      ],
      categoria: "Aplicacion de consola",
      tecnologias: "Java",
      fecha: "2020",
      descripcion:
        "Este prOyecto consta de tres scripts de java, los cuales son algoritmos para crear numeros pseudoaleatorios"+
        ", cada algoritmo toma en base un metodo distinto para crearlos: <strong>Mitad del producto, Multiplicador, Midsquare</strong>."+
        "<br>Cada algoritmo cuenta con la opcion de generar N numeros pseudoaletorios determinados por el usuario"+
        "luego de generar el set de numeros tambien permite realizar pruebas <strong>Kolmogorov-Smirnov (KS) </strong> y "+
        "así obtener la diferencia maxima.",
    },
    {
      imagenPortada: require("../imagenes/por4.jpg"),
      titulo: "Juego de Gato",
      url: "https://github.com/AntonioTorresMtz/gato_game",
      imagenesCarrusel: [
        require("../imagenes/gato-1.jpg"),
        require("../imagenes/gato-2.jpg"),
        require("../imagenes/gato-3.jpg"),
        require("../imagenes/gato-4.jpg"),
        require("../imagenes/gato-5.jpg"),
      ],
      categoria: "Aplicacion de Escritorio",
      tecnologias: "Java",
      fecha: "2021",
      descripcion: "El conocido juego de gato desde la comodidad de tu computadora! Es un juego programado"+
      "en java que recrea el juego de crees en raya ahora como videojuego. <br>"
      +"Cuenta con la opcion de registrar el marcador de las partidas ganadas y perdidas,"
      +" además de una opcion de penalización en caso de tardar mas de cinco segundos en realizar un turno"+
      "Tanto los graficos como animaciones son de completa autoría propia."
        
    },
    {
      imagenPortada: require("../imagenes/por6.jpg"),
      titulo: "Simulador de Maquina Tragamonedas",
      url: "https://github.com/AntonioTorresMtz/ruleta_tragamonedas",
      imagenesCarrusel: [
        require("../imagenes/ruleta-1.jpg"),
        require("../imagenes/ruleta-2.jpg"),
        require("../imagenes/ruleta-3.jpg"),
        require("../imagenes/ruleta-4.jpg"),
        require("../imagenes/ruleta-5.jpg"),
      ],
      categoria: "Aplicacion de consola",
      tecnologias: "Java",
      fecha: "2020",
      descripcion:
        "Este programa realiza una simulacion de una maquina 'tragaperras' o 'tragamonedas', "+
        "tipicamente encontradas en tiendas de abarrotes o farmacias, el objetivo de este programa "+
        "es conocer el comportamiento tipico de este tipo de maquinas y recolectar datos para un proyecto de simulacion."+
        "<br> Para la realización de este programa se tomo como base los datos obtenidos de varias partidas jugadas"+
        " de estas maquinas , las probabalidades de todos los simbolos que se muestran en el programa tienen como base los datos"+
        " obtenidos, con el objetivo de hacer el juego lo mas apegado a una maquina de verdad. ",
    },
    {
      imagenPortada: require("../imagenes/por5.jpg"),
      titulo: "Landing Page para Tienda",
      url: "https://github.com/AntonioTorresMtz/tienda_web",
      imagenesCarrusel: [
        require("../imagenes/pro-1.jpg"),
        require("../imagenes/pro-2.jpg"),
        require("../imagenes/pro-3.jpg"),
        require("../imagenes/pro-4.jpg"),
      ],
      categoria: "Desarrollo Web",
      tecnologias: "HTML, CSS, Javascript",
      fecha: "2020",
      descripcion:
        "Este proyecto consta de una landing page de una tienda de productos cosmeticos y esteticas, además del maquetado para la posterior integracion del backend. La pagina utiliza HTML y CSS puro sin ningun framework de estilos o frontend. Se utilizo flexbox para darle diseño reponsivo a la pagina. Tambien se utilizo vanilla javascript para algunas funciones que le agregaron dinamismo a la pagina. ",
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
