import React from 'react';
import { CategoriesContainer } from 'styled';

import CategoriesElement from './CategoriesElement';

import CategoriesMock from 'mocks/en-us/product-categories.json';

const CategoriesCarousel = () => {
    const [FetchedData, setFetchedData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        setIsLoading(true);
        
        setFetchedData(CategoriesMock.results);
        setError(null);
        setIsLoading(false);
    },[]);
    
    if(isLoading) return('Here should be a skeleton');

    if(error) return('Here should be an apologize and a refresh page button');

    if(FetchedData) return(
        <>
            <CategoriesContainer>
                {FetchedData.map( (item, index) => (
                    <li key={item.id} id={item.id}>
                        <CategoriesElement index={index}  {...item} />
                    </li>
                ))}                
            </CategoriesContainer>
        </>
    );
};

export default CategoriesCarousel
