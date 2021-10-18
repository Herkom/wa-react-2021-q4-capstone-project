import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
    position: relative;
    overflow: hidden;

    &:hover a img{
        transform: scale(1.1);
    }
    &:hover a:after{
        opacity: 1;
    }
    &:hover h3 a{
        color: #e4986a;
    }
`

const ImageLink = styled.a`
    position: relative;
    overflow: hidden;
    display: block;

    &:after {
        content: '';
        position: absolute;
        background: rgba(0,0,0,0.4);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0;
        transition: all 400ms ease-in-out 0s;
    }

    img{
        max-width: 100%;
        height: auto;
        transition: all 0.4s ease-in-out;
    }
`

const Title = styled.h3`
    position: absolute;
    padding: 1rem 2rem;
    background: rgba(255, 255, 255, 0.7);
    margin: 1rem;
    bottom: 0;
    right: 0;

    a{
        color: black;
        text-decoration: none;
        letter-spacing: 1px; 
    }
`

const CategoriesElement = ({ index, ...props }) => {

    const{
        name,
        main_image:{
            /* dimensions:{
                width,
                height,
            }, */
            alt,
            url
        }
    } = props.data; 

    return(
        <Article>
            <ImageLink href="www.google.com" title={alt}>
                <img alt={alt} src={url}/>
            </ImageLink>
            <Title>
                <a href="www.google.com" title={alt}>{name}</a>
            </Title>
        </Article>
    )
}

export { CategoriesElement }