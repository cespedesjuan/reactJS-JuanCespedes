import { Button } from "@mui/material";
import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price } from "../styles/styledComponents";
import { CartContext } from '../contexts/CartContext'

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (qty) => {
        setItemCount(qty);
        test.agregarAlCarrito(item, qty);
    }

    return (
        <>
            {
                item && item.imagen
                    ?
                    <DetailContainer>
                        <WrapperDetail>
                            <ImgContainer>
                                <ImageDetail src={item.imagen} />
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{item.nombre}</Title>
                                <Desc>{item.descripcion}</Desc>
                                <Price>$ {item.precio}</Price>
                                <Desc>{item.stock} unid. en Stock</Desc>
                            </InfoContainer>
                            {
                                itemCount === 0
                                    ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                                    : <Link to='/cart' style={{ textDecoration: 'none' }}><Button variant='contained' style={{ background: '#f06c9c' }}>Ver Carrito</Button></Link>


                            }
                        </WrapperDetail>
                    </DetailContainer>
                    : <p>Cargando...</p>
            }
        </>
    );
}

export default ItemDetail;
