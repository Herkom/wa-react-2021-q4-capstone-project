import React from 'react';
import Button from 'Components/Button/Button';
import { Link } from 'react-router-dom';

import { ProductHoverButton, Article, Name, SKU, ImageContainer } from './styled'

const ProductElement = ({...props}) => {

    const productId = props.id;

    const {
        name,
        sku,
        category,
        mainimage,
        price,
        short_description
    } = props.data;

    return(
        <Article>
            {props.showCategory ? <p>{category.slug}</p> : null}
            <ImageContainer>
                <img alt={mainimage.alt} src={mainimage.url}/>
            </ImageContainer>
            <Name>{name}</Name>
            <SKU>SKU: {sku}</SKU>
            <p>$ {price}</p>
            {props.showShortDescription ? <p>{short_description}</p>: null}

            <ProductHoverButton>
                <Button>Add to cart</Button>
                <Link to={`/product/${productId}`}>
                    <Button>View details</Button>
                </Link>
            </ProductHoverButton>
        </Article>
    );
};

export default ProductElement
