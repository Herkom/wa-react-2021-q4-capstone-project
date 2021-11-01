import React/*, { Suspense } */ from 'react';
import { Link } from 'react-router-dom';

import { CategoriesContainer, ProductContainer, SectionHeader } from './styled';

import ProductElement from './ProductElement';
import CategoriesElement from './CategoriesElement';
import Button from 'Components/Button';

import { useFeaturedBanners } from 'utils/hooks/useFeaturedBanners';

//const Slider = React.lazy(() => import('../Slider/Slider'));
//const ProductElement = React.lazy(() => import('./ProductElement'));
//const CategoriesElement = React.lazy(() => import('./CategoriesElement'));
//const Button = React.lazy(() => import('Components/Button'));

const ElementsContainer = ({type, pageSize, optional}) => {
    const { data, isLoading } = useFeaturedBanners(type, pageSize, optional);
    /* console.group(type)
    console.log('Type',type);
    console.log('Page size', pageSize);
    console.log('Data', data.results);
    console.log('Is loading?', isLoading);
    console.groupEnd(); */

    if(!isLoading){
        switch(type){
            case 'category' :
                return(
                    <>
                        {/* <Suspense fallback={<div>Loading...</div>}> */}
                            <SectionHeader>Categories</SectionHeader>
                            <CategoriesContainer>    
                                {data.results.map( (item, index) => (
                                    <li key={item.id} id={item.id}>
                                        <Link to={`/products?category=${item.slugs[0]}`}>
                                            <CategoriesElement index={index}  {...item} />
                                        </Link>
                                    </li>
                                ))}
                            </CategoriesContainer>
                        {/* </Suspense> */}
                    </>
                )

            case 'product' :
                return(
                    <>
                        {/* <Suspense fallback={<div>Loading...</div>}> */}
                            <SectionHeader>Products</SectionHeader>
                            <ProductContainer>
                                {data.results.map(item => (
                                    <li key={item.id} id={item.id}>
                                        <ProductElement showCategory {...item} />
                                    </li>
                                ))}
                            </ProductContainer>
                            <Link to="/products">
                                <Button>
                                    View all products
                                </Button>
                            </Link>
                        {/* </Suspense> */}
                    </>
                )
                
            default:
        }        
    }

    return <div>Loading...</div>;
};

export default ElementsContainer
