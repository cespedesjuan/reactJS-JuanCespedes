import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fsFetchOne } from '../utils/fsFetch';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        fsFetchOne(idItem)
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [idItem]);

    return (
        <ItemDetail item={dato} />
    )
}

export default ItemDetailContainer;