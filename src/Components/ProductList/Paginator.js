import React from 'react';
import { PaginatorContainer } from 'Components/ProductList/styled';

import rightArrow from 'assets/svgs/right-arrow.svg';
import leftArrow from 'assets/svgs/left-arrow.svg';

const Paginator = ( props ) => {

    const { numberOfProducts, numberItemsInGroup } = props;

    const numberOfPages = (products, items) => {
        const pagesArray = [];
        const pages = Math.ceil(products / items);
        
        for(let i = 1; i <= pages; i++){
            console.log(i);
            pagesArray.push(i);
        };

        return pagesArray;
    };

    return (
        <PaginatorContainer>
            <img alt={`${leftArrow}`} src={leftArrow} />
            <ul>
                {numberOfPages(numberOfProducts, numberItemsInGroup).map( page =>
                    <li key={page}>
                        <p>{page}</p>
                    </li>
                )}
            </ul>
            <img alt={`${rightArrow}`} src={rightArrow} />
        </PaginatorContainer>
    )
};

export default Paginator
