import React, { Suspense } from 'react';

import { BannerContainer, CategoriesContainer, ProductContainer, SectionHeader } from './styled';

const Slider = React.lazy(() => import('../Slider/Slider'));
const ProductElement = React.lazy(() => import('./ProductElement'));
const CategoriesElement = React.lazy(() => import('./CategoriesElement'));
const Button = React.lazy(() => import('Components/Button'));

const ElementsContainer = (props) => {
    //const [fetchedData, setFetchedData] = React.useState(null);
    
    //TODO: Check if its really nedded: <Error boundarys />
    //const [error, setError] = React.useState(null);

    //TODO: Check if its really needed:  fallback={}
    //const [isLoading, setIsLoading] = React.useState(false);
    
    /* React.useEffect(() => {
        setIsLoading(true);
        
        setError(null);
        setIsLoading(false);
    }, []); */

    const fetchedData = props.source.results;

    /* if ( isLoading ){
        return ('Here should be a skeleton')
    }
    else if( error ){
        return ('Here should be an apologize and a refresh page button')
    }
    else  */if( fetchedData.length > 0 ){
        switch(props.type){
            case 'Banner' :
                return(
                    <Suspense fallback={<div>Loading...</div>}>
                        <BannerContainer>
                            <Slider items={fetchedData} />
                        </BannerContainer>
                    </Suspense>
                )

            case 'Categories' :
                return(
                    <Suspense fallback={<div>Loading...</div>}>
                        <SectionHeader>Categories</SectionHeader>
                        <CategoriesContainer>    
                            {fetchedData.map( (item, index) => (
                                <li key={item.id} id={item.id}>
                                    <CategoriesElement index={index}  {...item} />
                                </li>
                            ))}
                        </CategoriesContainer>
                    </Suspense>
                )

            case 'Products' :
                return(
                    <>
                        <Suspense fallback={<div>Loading...</div>}>
                            <SectionHeader>Products</SectionHeader>
                            <ProductContainer>
                                {fetchedData.map(item => (
                                    <li key={item.id} id={item.id}>
                                        <ProductElement {...item} />
                                    </li>
                                ))}
                            </ProductContainer>
                            <Button goTo="/wa-react-2021-q4-capstone-project/products">
                                View all products
                            </Button>
                        </Suspense>
                    </>
                )
                
            default:
        }
    }
    else{
        return null
    }
}

export default ElementsContainer
