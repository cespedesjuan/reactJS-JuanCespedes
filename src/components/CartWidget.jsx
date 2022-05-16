import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const CartWidget = () => {
    const test = useContext(CartContext);

    return (
        <Badge>
            <ShoppingCartOutlined />
        </Badge>
    );
}

export default CartWidget;