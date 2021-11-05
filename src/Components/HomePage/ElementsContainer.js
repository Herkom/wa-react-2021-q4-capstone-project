import React from 'react';
import { Link } from 'react-router-dom';

import { CategoriesContainer, ProductContainer, SectionHeader } from './styled';

import ProductElement from './ProductElement';
import CategoriesElement from './CategoriesElement';
import Button from 'Components/Button/Button';

import { useFeaturedBanners } from 'utils/hooks/useFeaturedBanners';

const ElementsContainer = ({type, pageSize, optional}) => {
    const { data, isLoading } = useFeaturedBanners(type, pageSize, optional);

    if(!isLoading){
        switch(type){
            case 'category' :
                return(
                    <>
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
                    </>
                )

            case 'product' :
                return(
                    <>
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
                    </>
                )
                
            default:
        }        
    }

    return <div>Loading...</div>;
};

export default ElementsContainer
