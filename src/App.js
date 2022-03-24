import logo from './logo.svg';
import './App.scss';
import { Button, Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="navBar">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Juan E-Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Contacto</Nav.Link>
                <NavDropdown title="Productos" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Guitarras</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Bajos</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Teclados</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Todos nuestros productos</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
export default App;
