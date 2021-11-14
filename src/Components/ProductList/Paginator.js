import React from 'react';
import { PaginatorContainer } from 'Components/ProductList/styled';

import rightArrow from 'assets/svgs/right-arrow.svg';
import leftArrow from 'assets/svgs/left-arrow.svg';

const Paginator = ( { numberOfPages, next, prev, state, setStater } ) => {
    
    const pages = Array.from(Array(numberOfPages).keys());

    const selectAPage = (page) => {
        setStater({
            ...state,
            currentPage: page
        })
    }

    return (
        <PaginatorContainer>
            <img alt={`${leftArrow}`} src={leftArrow} onClick={()=>prev()} />
            <ul>
                {pages.map( page => {
                    const index = page + 1;
                    return(
                        <li key={index} onClick={()=>selectAPage(index)}>
                            <p>{index}</p>
                        </li>
                    )
                })}
            </ul>
            <img alt={`${rightArrow}`} src={rightArrow} onClick={()=>next()} />
        </PaginatorContainer>
    )
};

export default Paginator
