import React from 'react';
import {ProductContainer} from './styled';

//import APIcall from '../../utils/APIcall';
//import APICallHandler from 'utils/APICallHandler';
import ProductElement from './ProductElement';
import Button from 'Components/Button';

import ProductsMock from 'mocks/en-us/featured-products.json';

const ProductsGrid = () => {
    const [FetchedData, setFetchedData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    //const URL = 'https://raw.githubusercontent.com/Herkom/wa-react-2021-q4-capstone-project/feat/deliverable1/mocks/en-us/featured-products.json';

    /* React.useEffect(() => {
        setIsLoading(true);
        
        APIcall(URL)
        .then(response => APICallHandler(setError, setFetchedData, setIsLoading, response)) 

    },[setIsLoading, URL]); */

    React.useEffect(() => {
        setIsLoading(true);
        
        setFetchedData(ProductsMock.results);
        setError(null);
        setIsLoading(false);
    },[]);
    
    return(
        <>
            {   isLoading ? 
                    ('Here should be a skeleton')
                : error ?
                    ('Here should be an apologize and a refresh page button')
                : FetchedData ?
                    <ProductContainer>
                        {FetchedData.map(item => (
                            <li key={item.id} id={item.id}>
                                <ProductElement {...item} />
                            </li>
                        ))}
                    </ProductContainer>
                : null 
            }
            <Button>
                View all products
            </Button>
        </>
    );
};

export default ProductsGrid
