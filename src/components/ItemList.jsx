import Item from './Item';
import { ProductsContainer } from '../styles/styledComponents';

const ItemList = ({ items }) => {
    return (
        <ProductsContainer>
            {
                items.length > 0
                    ? items.map(item => <Item id={item.id} title={item.nombre} price={item.precio} pictureUrl={item.imagen} stock={item.stock} />) //En el método map se usan los nombres que se le da a cada dato en el array de productos, por eso usé "cost" en vez de "price".
                    : <p>Cargando...</p>
            }
        </ProductsContainer>
    );
}

export default ItemList;