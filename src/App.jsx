import logo from './logo.svg';
import './App.scss';
import $ from 'jquery';
import { Button, Navbar, Nav, NavDropdown, Container, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}
export default App;
