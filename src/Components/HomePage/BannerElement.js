import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
    position: relative;
`
const Header = styled.h2`
    font-family: 'DM Serif Display', serif;
    text-transform: capitalize;
    position: absolute;
    bottom: 50%;
    font-size: 47px;
    line-height: 49px;
`
const Description = styled.p`
    font-family: 'Mulish', sans-serif;
    text-transform: capitalize;
    font-weight: 500;
    position: absolute;
    bottom: 30%;
`
const Image = styled.img`
    width: 100%;
`

const BannerElement = ({...props}) =>{
    const {
        title,
        description:[
            {text: productDescription}
        ],
        main_image:{
            alt: altImageText,
            url: imageURL
        }
    } = props.data;

    return (
        <Article>
            <Header>{title.toLowerCase()}</Header>
            <Description>{productDescription.length > 30 ? '': productDescription}</Description>
            <Image alt={altImageText} src={imageURL}/>
        </Article>
    )
}

export { BannerElement }