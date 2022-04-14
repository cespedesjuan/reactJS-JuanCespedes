import { Button } from '@mui/material';
import {Add, Remove} from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { ProductAmountContainer, ProductAmount } from './styledComponents';

const ItemCount = () => {
    const [cantidad, setCantidad] = useState(1)
    const restar = () => {
        if(cantidad < 2) {
            javascript:void(0)
        }
        else {
            setCantidad(cantidad-1)
        }
    }
    const aumentar = () => {
        if(cantidad > 4) {
            javascript:void(0)
        }
        else {
            setCantidad(cantidad + 1)
        }
    }
    const confirmar = () => {
        if (cantidad == 1) {
            alert("Agregaste  " + cantidad + "  producto")
        }
        else{
        alert("Agregaste  " + cantidad + "  productos")
        }
    } 
    return (
        <ProductAmountContainer>
        <Button style={{color:'#f06c9c'}} variant='text' onClick={aumentar}><Add/></Button>
        <ProductAmount>{cantidad}</ProductAmount>
        <Button style={{color:'#f06c9c'}} variant='text' onClick={restar}><Remove/></Button>
        {
            cantidad
            ?<Button style={{textDecoration: "none", color: "black", background:"#ffde2d"}} variant="contained">Agregar al Carrito</Button>
            :<Button style={{textDecoration: "none", color: "black", background:"#ffde2d"}} variant="contained" disabled>Agregar al Carrito</Button>
        }
    </ProductAmountContainer>
    )
}

export default ItemCount;