import React, {useState, useEffect} from 'react';
import { H1Header, ProductContainer, ProductListSection, CategoriesContainer,  } from 'Components/ProductList/styled';
import ProductElement from 'Components/HomePage/ProductElement';
import ProductSkeleton from 'Components/ProductList/ProductSkeleton';
import Paginator from 'Components/ProductList/Paginator';

import { useFeaturedBanners } from 'utils/hooks/useFeaturedBanners';

import productsMock from 'mocks/en-us/products.json';

const allProducts = productsMock.results;

const ProductListPage = () => {
    const { data:Categories, isLoading:areCategoriesLoaded } = useFeaturedBanners('category', 30);

    const [ chosedCategories, setChosedCategories ] = useState({ items: [] });
    const [ filteredProducts, setFilteredProducts ] = useState({ products: [] });
    const [ hasTimePassed, setHasTimePassed ] = useState(false);
    const [ showResetButton, setShowResetButton] = useState(false);
    
    const getTheFilteredProducts = () => {
        return allProducts.filter( (item) => 
            chosedCategories.items.indexOf(item.data.category.slug) > -1
        );
    };


    const addCategory = (array, name) =>{
        array.push(name);

        setChosedCategories({
            items: array
        });
    };


    const removeCategory = (array, name) =>{
        const indexToRemove = array.findIndex(element => element === name);
        array.splice(indexToRemove,1);

        setChosedCategories({
            items: array
        });
    };


    const handleCheckboxChange = (event) => {
        const arrayOfchosedCategories = chosedCategories.items;

        const isItOnTheArray = arrayOfchosedCategories.some(
            category => category === event.target.name
        );

        if(!isItOnTheArray && event.target.checked)
            addCategory(arrayOfchosedCategories, event.target.name);
        if(isItOnTheArray && !event.target.checked)
            removeCategory(arrayOfchosedCategories, event.target.name);

        if(chosedCategories.items.length > 0)
            setShowResetButton(true)

        const resultsFromTheFilter = getTheFilteredProducts();

        setFilteredProducts({
            products: resultsFromTheFilter
        });
    };

    const resetFilters = () => {
        setFilteredProducts({ products: [] });
        setChosedCategories({ items: [] });
    }

    //If no category is selected show all products
    useEffect(() => {

        if(filteredProducts.products.length === 0){
            setFilteredProducts({ products: allProducts });
            setShowResetButton(false);
        }

    }, [filteredProducts]);


    useEffect(() => {
        setTimeout(() => {
            setHasTimePassed(true);
        }, 2000);
    }, []);

    return(
        <>
            <H1Header>This is the Product List Page</H1Header>
            <ProductListSection>
                <CategoriesContainer>
                    <h2>Categories</h2>
                    {
                        areCategoriesLoaded ? null :
                        
                        <ul>
                            {Categories.results.map(item => (
                                <li key={item.id}>
                                    <label>
                                        <input name={item.data.name} type='checkbox' onClick={handleCheckboxChange}/>
                                        {item.data.name}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    }
                    {
                        showResetButton ? 
                            <input
                                type="reset"
                                value="Clear filters"
                                onClick={resetFilters}/>
                        : null
                    }
                </CategoriesContainer>
                <ProductContainer>
                    {  
                        hasTimePassed ?
                            filteredProducts.products.map(item => {
                                return(
                                <li key={item.id}>
                                    <ProductElement showCategory {...item} />
                                </li>
                                )
                            })
                        : filteredProducts.products.map(item => {
                            return(
                                <ProductSkeleton key={item.id}/>
                            )
                        })
                    }
                </ProductContainer>
                <Paginator numberOfProducts={filteredProducts.products.length} numberItemsInGroup={12}/>
            </ProductListSection>
        </>
    )
};

export default ProductListPage
