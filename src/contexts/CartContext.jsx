import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const agregarAlCarrito = (item, qty) => {
        let found = cartList.find(product => product.idItem === item.id);
        if (found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.imagen,
                    nameItem: item.nombre,
                    costItem: item.precio,
                    qtyItem: qty
                }
            ]);
        } else {
            //Al encontrar el item aumentamos su cantidad.
            found.qtyItem += qty;
            setCartList([
                ...cartList
            ]);
        }
    }

    const borrarCarrito = () => {
        setCartList([]);
    }

    const borrarItem = (id) => {
        let result = cartList.filter(item => item.idItem !== id);
        setCartList(result);
    }

    const calcCantItems = () => {
        let cant = cartList.map(item => item.qtyItem);
        return cant.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    const calcTotalPorItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].costItem * cartList[index].qtyItem;
    }

    const calcSubTotal = () => {
        let totalPorItem = cartList.map(item => calcTotalPorItem(item.idItem));
        return totalPorItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcImpuestos = () => {
        return calcSubTotal() * 0.18;
    }

    const calcTotal = () => {
        return calcSubTotal();
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            borrarCarrito,
            borrarItem,
            calcCantItems,
            calcTotalPorItem,
            calcSubTotal,
            calcImpuestos,
            calcTotal
        }}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContextProvider;