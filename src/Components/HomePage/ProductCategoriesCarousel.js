import React from 'react';
import styled from 'styled-components';

import APIcall from './APIcall';
import { CategoriesElement } from './CategoriesElement';

const Container = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;

    li{
        width: 25%;
        min-width: 350px;
        margin: 0.5rem;
    }
`

const ProductCategoriesCarousel = () => {
    const [FetchedData, setFetchedData] = React.useState(null);
    const [error, setError] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(false);

    const URL = 'http://localhost:8080/en-us/product-categories.json';

    React.useEffect(() => {
        setIsLoading(true);
        APIcall(URL, setFetchedData, setError, setIsLoading);
    },[])
    
    return(
        <>
            {   
                isLoading ? 
                    ('Here should be a skeleton')
                : error ?
                    ('Here should be an apologize and a refresh page button')
                : FetchedData ?
                    <Container>
                        {FetchedData.map( (item, index) => (
                            <li key={item.id} id={item.id}>
                                <CategoriesElement index={index}  {...item} />
                            </li>
                        ))}
                    </Container>
                : null
            }
        </>
    )
}

export { ProductCategoriesCarousel }