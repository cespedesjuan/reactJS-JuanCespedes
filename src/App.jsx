import logo from './logo.svg';
import './App.scss';
import $ from 'jquery';
import { Button, Navbar, Nav, NavDropdown, Container, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route exact path="/" element= {<NavBar/>}/>
      <Route exact path="/items" element= {<ItemListContainer/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;
