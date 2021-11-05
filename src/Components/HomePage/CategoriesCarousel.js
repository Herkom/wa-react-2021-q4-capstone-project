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
    
    return(
        <>
            {   
                isLoading ? 
                    ('Here should be a skeleton')
                : error ?
                    ('Here should be an apologize and a refresh page button')
                : FetchedData ?
                    <CategoriesContainer>
                        {FetchedData.map( (item, index) => (
                            <li key={item.id} id={item.id}>
                                <CategoriesElement index={index}  {...item} />
                            </li>
                        ))}
                    </CategoriesContainer>
                : null
            }
        </>
    );
};

export default CategoriesCarousel
