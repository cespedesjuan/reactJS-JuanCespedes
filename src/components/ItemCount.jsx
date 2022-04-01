import { useState } from "react"

const ItemCount = () => {
    const [cantidad, setCantidad] = useState(1)
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
        <div>
            <button onClick={restar}>{'\u00A0'}-{'\u00A0'}</button>
            <button onClick={confirmar} >Agregar al carrito</button>
            <button onClick={aumentar}>+</button>
            <p>{cantidad}</p>
        </div>
    )
}

export default ItemCount;