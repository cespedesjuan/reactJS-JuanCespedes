import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { ProductContainer, Circle, Image, Info, Icon } from './styledComponents';

const Item = ({nombre, precio, stock, imagenURL, descripcion, id}) => {
    return(
        <ProductContainer>
        <Circle/>
        <Image src={imagenURL}/>
        <Info>
            <Icon>
                <LocalOfferOutlined/><strong>$ {precio}</strong>
            </Icon>
            <Icon>
                <DescriptionOutlined/>{stock} unidades en Stock.
            </Icon>
            <Icon>
                <Link to={`/item/${id}`}><InfoOutlined/>Detalles</Link>
            </Icon>
        </Info>
        </ProductContainer>
    )
}

export default Item