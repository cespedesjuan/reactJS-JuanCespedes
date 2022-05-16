import { Button } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { ProductAmountContainer, ProductAmount } from '../styles/styledComponents';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [items, setItems] = useState(0);

    useEffect(() => {
        setItems(initial);
    }, [initial]);

    const SumarItems = () => {
        if (items < stock) {
            setItems(items + 1);
        }

    }

    const RestarItems = () => {
        if (items > initial) {
            setItems(items - 1);
        }
    }

    return (
        <ProductAmountContainer>
            <Button style={{ color: '#f06c9c' }} variant='text' onClick={SumarItems}><Add /></Button>
            <ProductAmount>{items}</ProductAmount>
            <Button style={{ color: '#f06c9c' }} variant='text' onClick={RestarItems}><Remove /></Button>
            {
                stock && items
                    ? <Button style={{ textDecoration: "none", color: "black", background: "#ffde2d" }} variant="contained" onClick={() => onAdd(items)}>Agregar al Carrito</Button>
                    : <Button style={{ textDecoration: "none", color: "black", background: "#ffde2d" }} variant="contained" disabled>Agregar al Carrito</Button>
            }
        </ProductAmountContainer>
    );
}

export default ItemCount;