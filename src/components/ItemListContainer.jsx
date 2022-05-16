import ItemList from './ItemList.jsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import { fsFetch } from '../utils/fsFetch'

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        fsFetch(idCategory)
            .then(result => setDatos(result))
            .catch(err => console.log(err));
    }, [idCategory]);

    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

    return (
        <>
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;