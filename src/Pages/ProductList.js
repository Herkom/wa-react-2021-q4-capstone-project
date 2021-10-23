import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ProductElement from 'Components/HomePage/ProductElement';

import ProductsMock from 'mocks/en-us/featured-products.json';
import CategoriesMock from '../mocks/en-us/product-categories.json';

const H1Header = styled.h1`
    font-size: 2rem;
    text-align: center;
    margin: 2rem 0;
`;
const ProductContainer = styled.ul`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, 15rem);
    justify-content: center;
    margin: 0 auto;
    width: calc( 100% - 20vw );

    @media(max-width:600px){
        grid-template-columns: repeat(auto-fit, 25rem);
        width: calc( 90% );

        li{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;
const ProductListSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    
    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }

`;

const CategoriesContainer = styled.aside`
    margin: 2rem 0 2rem 3rem;
    padding: 1rem;
    border: 1px solid grey;
    font-size: 1.5rem;

    @media(max-width: 600px){
        font-size: 1.5rem;
        border: none;
        margin: 2rem;
        padding: 0;
    }

    ul{
        font: 400 0.8rem/1.5rem 'Mulish',sans-serif;
        margin-left: 0.5rem;
        margin-top: 0.5rem;

        @media(max-width: 600px){
            font-size: 1rem;
            margin-left: 1rem;
        }
    }

    label{
        display: flex;
        align-items: center;

        @media(max-width: 600px){
            margin: 1rem 0;
        }
    }

    input[type='checkbox']{
        height: 20px;
        width: 20px;
        margin-right: 0.5rem;

        @media(max-width: 600px){
            height: 25px;
            width: 25px;
        }
    }
`;

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

    const handleInputChange = (event) =>{
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
                    Categories
                    <ul>
                        {Categories.map(item => (
                            <li key={item.id}>
                                <label>
                                    <input name={item.data.name} type='checkbox' onChange={handleInputChange}/>
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
            </ProductListSection>
        </>
    )
};

export default ProductList
