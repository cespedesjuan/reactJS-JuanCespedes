import { useEffect, useState } from 'react';
import promiseJS from '../utils/promiseJS';
import ItemDetail from './ItemDetail';
import products from '../utils/products';

const ItemDetailContainer = () => {
    const [dato, setDato] = useState([]);
    
    useEffect(() => {
        promiseJS(2000, products.find(item => item.id === parseInt(idItem)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);

    return (
        <ItemDetail item={dato}/>
    )
}

export default ItemDetailContainer;