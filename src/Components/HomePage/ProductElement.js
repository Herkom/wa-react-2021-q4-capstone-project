import React from 'react';
import Button from 'Components/Button/Button';
import { Link } from 'react-router-dom';
import { ProductHoverButton, Article, Text, Name, SKU, ImageContainer } from './styled';

const ProductElement = ({id, data, showCategory, showShortDescription}) => {

    const productId = id;

    const {
        name,
        sku,
        category,
        mainimage,
        price,
        short_description
    } = data;

    return(
        <Article>
            {showCategory ? <Text>{category.slug}</Text> : null}
            <ImageContainer>
                <img alt={mainimage.alt} src={mainimage.url}/>
            </ImageContainer>
            <Name>{name}</Name>
            <SKU>SKU: {sku}</SKU>
            <Text>$ {price}</Text>
            {showShortDescription ? <p>{short_description}</p>: null}

            <ProductHoverButton>
                <Button propsForFunction={ data && {productId, data}}>Add to cart</Button>
                <Link to={`/product/${productId}`}>
                    <Button>View details</Button>
                </Link>
            </ProductHoverButton>
        </Article>
    );
};

export default ProductElement
