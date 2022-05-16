import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { ProductContainer, Circle, Image, Info, Icon } from '../styles/styledComponents';

const Item = ({ id, title, stock, price, pictureUrl }) => {
    return (
        <ProductContainer>
            <Circle />
            <Image src={pictureUrl} />
            <Info>
                <Icon>
                    <LocalOfferOutlined /><strong>$ {price}</strong>
                </Icon>
                <Icon>
                    <DescriptionOutlined />{stock} unidades en Stock.
                </Icon>
                <Icon>
                    <Link to={`/item/${id}`}><InfoOutlined />Detalles</Link>
                </Icon>
            </Info>
        </ProductContainer>
    )
}

export default Item;