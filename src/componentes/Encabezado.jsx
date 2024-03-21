import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../estilos/Encabezado.css"
import { IoCodeSlashSharp } from "react-icons/io5";

function Encabezado() {
  return (
    <Navbar expand="lg" className="contenedor-encabezado">
      <Container>
        <Navbar.Brand href="#home" className='text-white'><IoCodeSlashSharp /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-white">
            <Nav.Link href="#sobre" className='text-white'>Sobre mi</Nav.Link>
            <Nav.Link href="#proyectos" className='text-white'>Proyectos</Nav.Link>
            <Nav.Link href="#contacto" className='text-white'>Contacto</Nav.Link>
            <Nav.Link href="#tecnologias" className='text-white'>Tecnologias</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Encabezado;