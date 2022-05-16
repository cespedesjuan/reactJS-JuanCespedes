import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice } from "../styles/styledComponents";

import styled from "styled-components";
import FormatNumber from "../utils/formatNumber";

import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from "../utils/firebaseConfig";

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopText = styled.span`
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
    const test = useContext(CartContext);

    const crearPedido = () => {
        const itemsParaDB = test.cartList.map(item => ({
            id: item.idItem,
            title: item.nameItem,
            price: item.costItem
        }));

        test.cartList.forEach(async (item) => {
            const itemRef = doc(db, "productos", item.idItem);
            await updateDoc(itemRef, {
                stock: increment(-item.qtyItem)
            });
        });

        let pedido = {
            comprador: {
                nombre: "Martín Zielony",
                email: "martozielony@gmail.com",
                nroTelefono: "123456789"
            },
            total: test.calcTotal(),
            items: itemsParaDB,
            fecha: serverTimestamp()
        };

        console.log("Resumen del pedido:");
        console.log(pedido);

        const crearPedidoEnFS = async () => {
            const nuevoPedidoRef = doc(collection(db, "pedidos"));
            await setDoc(nuevoPedidoRef, pedido);
            return nuevoPedidoRef;
        }


        crearPedidoEnFS()
            .then(result => {
                alert("Tu pedido ha sido creado. Por favor anote el ID.\n\n\nID del pedido: " + result.id + "\n\n")
            })
            .catch(err => console.log(err));

        test.borrarCarrito();
    }

    return (
        <WrapperCart>
            <TitleCart>Carrito</TitleCart>
            <Top>
                <Link to='/'><TopButton>Seguir Comprando</TopButton></Link>
                {
                    (test.cartList.length > 0)
                        ? <TopButton type="filled" onClick={test.borrarCarrito}>Borrar Carrito</TopButton>
                        : <TopText>El carrito está vacío.</TopText>
                }
            </Top>
            <ContentCart>
                <Bottom>
                    <Info>
                        {
                            test.cartList.length > 0 &&
                            test.cartList.map(item =>
                                <Product key={item.id}>
                                    <ProductDetail>
                                        <ImageCart src={item.imgItem} />
                                        <Details>
                                            <span>
                                                <b>Product: </b> {item.nameItem}
                                            </span>
                                            <TopButton type="filled" onClick={() => test.borrarItem(item.idItem)}>Borrar Item</TopButton>
                                        </Details>
                                    </ProductDetail>
                                    <PriceDetail>
                                        <ProductAmountContainer>
                                            <ProductAmount>{item.qtyItem} item(s)</ProductAmount>
                                            /
                                            <ProductAmount>$ {item.costItem} c/u</ProductAmount>
                                        </ProductAmountContainer>
                                        <ProductPrice>$ {test.calcTotalPorItem(item.idItem)}</ProductPrice>
                                    </PriceDetail>
                                </Product>
                            )
                        }
                    </Info>
                    {
                        test.cartList.length > 0 &&
                        <Summary>
                            <SummaryTitle>Resumen de Compra</SummaryTitle>
                            <SummaryItem> {/*Subtotal*/}
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcSubTotal()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem> {/*Impuestos*/}
                                <SummaryItemText>Impuestos</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcImpuestos()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem> {/*Descuento de Impuesto*/}
                                <SummaryItemText>Descuento de Impuestos</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={-test.calcImpuestos()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type='total'> {/*Total*/}
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcTotal()} /></SummaryItemPrice>
                            </SummaryItem>
                            <Button onClick={crearPedido}>Comprar</Button>
                        </Summary>
                    }
                </Bottom>
            </ContentCart>
        </WrapperCart>
    );
}

export default Cart;