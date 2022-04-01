import { Button, Navbar, Nav, NavDropdown, Container, Badge } from 'react-bootstrap';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const CartWidget = () => {
    return(
        <>
            <Button variant="light">
              <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon><Badge bg="secondary">1</Badge>
            </Button>
        </>
        );
}

export default CartWidget;