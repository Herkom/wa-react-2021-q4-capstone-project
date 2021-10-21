import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    max-width: 20rem;

    img {
        max-width: 90%;
    }
`;
const Name = styled.h4`
    font: 500 1rem/1.5rem 'Mulish', sans-serif;
    text-align: center;
    color: #666666;
`;

const SKU = styled.p`
    margin: 0.5rem 0 1rem 0;
    font: 400 10px/10px 'Mulish', sans-serif;
`;

const ProductElement = ({...props}) => {
    const {
        name,
        sku,
        mainimage,
        price
    } = props.data;

    return(
        <Article>
            <img alt={mainimage.alt} src={mainimage.url}/>
            <Name>{name}</Name>
            <SKU>SKU: {sku}</SKU>
            <p>$ {price}</p>
        </Article>
    );
};

export default ProductElement
