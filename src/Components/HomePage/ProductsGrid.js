import React from 'react';
import {ProductContainer} from './styled';

import ProductElement from './ProductElement';
import Button from 'Components/Button/Button';

import ProductsMock from 'mocks/en-us/featured-products.json';

const ProductsGrid = () => {
    const [FetchedData, setFetchedData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

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
