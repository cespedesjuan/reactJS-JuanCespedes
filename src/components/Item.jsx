
const Item = ({nombre, precio, stock, imagenURL, descripcion}) => {
    return(
        <div>
            <p>probando{nombre}</p>
            <p>probando{stock}</p>
            <p>probando{imagenURL}</p>
            <p>probando{descripcion}</p>
            <p>{precio}</p>
        </div>
    )
}

export default Item