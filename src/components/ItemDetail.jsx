import ItemCount from "./ItemCount";
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price } from "./styledComponents";


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
        item && item.image
        ?
        <DetailContainer>
            <WrapperDetail>
                <ImgContainer>
                    <ImageDetail src={item.imagenURL[0]}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.nombre}</Title>
                    <Desc>{item.descripcion}</Desc>
                    <Price>$ {item.precio}</Price>
                    <Desc>{item.stock} unid. en Stock</Desc>
                </InfoContainer>
                <ItemCount stock={item.stock} initial={0} />
            </WrapperDetail>
        </DetailContainer>
        : <p>Cargando...</p>
    }
    </>
    );
}

export default ItemDetail;
