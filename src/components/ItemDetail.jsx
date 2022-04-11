import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const restar = () => {
        if(cantidad < 2) {
            javascript:void(0)
        }
        else {
            setCantidad(cantidad-1)
        }
    }
    const aumentar = () => {
        if(cantidad > 4) {
            javascript:void(0)
        }
        else {
            setCantidad(cantidad + 1)
        }
    }
    const confirmar = () => {
        if (cantidad == 1) {
            alert("Agregaste  " + cantidad + "  producto")
        }
        else{
        alert("Agregaste  " + cantidad + "  productos")
        }
    }
    return (
    <>
    {
        item.image
        ?
        <div>
            <img src={item.image[0]}/>
            <div>
                <strong>{item.nombre}</strong>
                <p>{item.descripcion}</p>
                <strong>$ {item.precio}</strong>
                <p>{item.stock} Unidad(es) en stock.</p>
            </div>
            <ItemCount stock={item.stock} initial={1} />
        </div>
        : <p>Cargando...</p>
    }
    </>);
}

export default ItemDetail;
