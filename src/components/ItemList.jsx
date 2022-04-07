import Item from "./Item"

const ItemList = ({items}) => {
    return (
        <div>
            {
            items.lenght > 0
            ? items.map(item => <Item  nombre={item.nombre} precio={item.precio} stock={item.stock} imagenURL={item.imagenURL[0]} descripcion={item.descripcion} />)
            : <p>Cargando...</p>
            }
        </div>
    );
}

export default ItemList