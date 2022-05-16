import CartWidget from "./CartWidget.jsx";
import { Link } from 'react-router-dom';
import { AppBar } from "@mui/material";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from "../styles/styledComponents.jsx";

const NavBar = () => {
    return (
        <AppBar position="relative" style={{background: '#d61fd6'}}>
            <Wrapper>
                <Left>
                    <Link to='/' style={{ color:'#1fd67b'}}><Logo>Music E'Store Clave🎵 </Logo></Link>
                </Left>
                <Center>
                    <Link to='/category/9' style={{textDecoration: "none", color: "#ffffff"}}><MenuItem style={{}}>Guitarras</MenuItem></Link>
                    <Link to='/category/1' style={{textDecoration: "none", color: "#ffffff"}}><MenuItem>Bajos</MenuItem></Link>
                    <Link to='/category/5' style={{textDecoration: "none", color: "#ffffff"}}><MenuItem>Baterías</MenuItem></Link>
                </Center>
                <Right>
                <MenuItem style={{textDecoration: "none", color: "#ffffff"}}>Registrarse</MenuItem>
                    <MenuItem style={{textDecoration: "none", color: "#ffffff"}}>Iniciar Sesión</MenuItem>
                    <MenuItem style={{textDecoration: "none", color: "#ffffff"}}><CartWidget /></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;