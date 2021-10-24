import React, {useState, useEffect} from 'react';
import { H1Header, ProductContainer, ProductListSection, CategoriesContainer,  } from 'Components/ProductList/styled';
import ProductElement from 'Components/HomePage/ProductElement';
import Paginator from 'Components/ProductList/Paginator';

import ProductsMock from 'mocks/en-us/featured-products.json';
import CategoriesMock from '../mocks/en-us/product-categories.json';

const Categories = CategoriesMock.results;
const allProducts = ProductsMock.results;

const ProductList = () => {

    const [ chosedCategories, setChosedCategories ] = useState({ items: [] });
    const [ filteredProducts, setFilteredProducts ] = useState({ products: [] });

    const filter = () =>         
        allProducts.filter( (item) => 
            chosedCategories.items.indexOf(item.data.category.slug) > -1
        );

    const addCategory = (array, name) =>{
        array.push(name);

        setChosedCategories({
            items: array
        });
    }

    const removeCategory = (array, name) =>{
        const indexToRemove = array.findIndex(element => element === name);
        array.splice(indexToRemove,1);

        setChosedCategories({
            items: array
        });
    }

    const handleCheckboxChange = (event) =>{
        const arrayOfchosedCategories = chosedCategories.items;

        const isItOnTheArray = arrayOfchosedCategories.some(
            category => category === event.target.name
        );

        if(!isItOnTheArray)
            addCategory(arrayOfchosedCategories, event.target.name);
        if(isItOnTheArray)
            removeCategory(arrayOfchosedCategories, event.target.name);

        const filteredProducts = filter();

        setFilteredProducts({
            products: filteredProducts
        });
    }


    //If no category is selected show all products
    useEffect(() => {

        if(filteredProducts.products.length === 0)
            setFilteredProducts({ products: allProducts });

    }, [filteredProducts])


    return(
        <>
            <H1Header>This is the Product List Page</H1Header>
            <ProductListSection>
                <CategoriesContainer>
                    <h2>Categories</h2>
                    <ul>
                        {Categories.map(item => (
                            <li key={item.id}>
                                <label>
                                    <input name={item.data.name} type='checkbox' onChange={handleCheckboxChange}/>
                                    {item.data.name}
                                </label>
                            </li>
                        ))}
                    </ul>
                </CategoriesContainer>
                <ProductContainer>
                    {filteredProducts.products.map(item => {
                        return(
                        <li key={item.id}>
                            <ProductElement showCategory={true} {...item} />
                        </li>
                        )
                    })}
                </ProductContainer>
                <Paginator numberOfProducts={filteredProducts.products.length} numberItemsInGroup={5}/>
            </ProductListSection>
        </>
    )
};

export default ProductList
