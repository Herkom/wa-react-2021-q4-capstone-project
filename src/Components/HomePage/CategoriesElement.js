import React from 'react';
import { CategoryArticle, CategoryImageLink, CategoryTitle } from './styled';

const CategoriesElement = ({ data }) => {

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
    } = data; 

    return(
        <CategoryArticle>
            <CategoryImageLink>
                <img alt={alt} src={url}/>
            </CategoryImageLink>
            <CategoryTitle>
                {name}
            </CategoryTitle>
        </CategoryArticle>
    );
};

export default CategoriesElement
