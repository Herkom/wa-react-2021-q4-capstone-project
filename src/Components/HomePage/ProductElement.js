import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    max-width: 20rem;
    margin: 1rem;

    @media(max-width: 600px){
        border: 1px solid #d0caca;
        padding: 1rem;
        width: 25rem;
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

const ImageContainer = styled.div`
    width: 100%;
    max-height: 15rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 100%;
    }
    @media(max-width: 600px){
        width: 80%;
        margin-top: 1rem;
    }
`;

const ProductElement = ({...props}) => {
    const {
        name,
        sku,
        category,
        mainimage,
        price
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
        </Article>
    );
};

export default ProductElement
