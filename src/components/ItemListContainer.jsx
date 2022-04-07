import ItemCount from "./ItemCount";
import ItemList from "./ItemList"
import { useState, useEffect } from "react";
import promiseJS from "../utils/promiseJS";
import products from "../utils/products";

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    useEffect(() => {
        promiseJS(2000, products)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, []);
    return(
        <div className='ItemLista'>
            <ItemList items={datos} />
            <ItemCount initial="1"/>
        </div>
    )
}
export default ItemListContainer;