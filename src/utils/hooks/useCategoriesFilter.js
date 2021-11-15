import { useState, useEffect, useCallback } from 'react';

import {NUMBER_OF_PRODUCTS_TO_DISPLAY} from 'utils/constants';

import { useFeaturedBanners } from 'utils/hooks/useFeaturedBanners';

export const useCategoriesFilter = () => {

    const { data:{results:allProducts}, isLoading: areProductsLoaded } = useFeaturedBanners('product', 50);
    const { data:Categories, isLoading:areCategoriesLoaded } = useFeaturedBanners('category', 30);

    const [ chosedCategories, setChosedCategories ] = useState({ items: [] });
    const [ filteredProducts, setFilteredProducts ] = useState({ products: [] });
    const [ showResetButton, setShowResetButton] = useState(false);

    const getTheFilteredProducts = () =>
        allProducts.filter( (item) => 
             chosedCategories.items.indexOf(item.data.category.slug) > -1
        )

    const addCategory = (array, name) =>{
        array.push(name.toLowerCase());

        setChosedCategories({
            items: array
        });
    };

    const removeCategory = (array, name) =>{

        const indexToRemove = array.findIndex(element => element === name.toLowerCase());
        array.splice(indexToRemove,1);

        setChosedCategories({
            items: array
        });
    };

    const handleCheckboxChange = useCallback( (event) => {
        const arrayOfchosedCategories = chosedCategories.items;
        const name = event.target.name.toLowerCase();
        console.log(event.target.name)

        const isItOnTheArray = arrayOfchosedCategories.some(
            category => category === name
        );


        if(!isItOnTheArray && event.target.checked)
            addCategory(arrayOfchosedCategories, name);
        if(isItOnTheArray && !event.target.checked)
            removeCategory(arrayOfchosedCategories, name);

        if(chosedCategories.items.length > 0)
            setShowResetButton(true)

        const resultsFromTheFilter = getTheFilteredProducts();

        setFilteredProducts({
            products: resultsFromTheFilter
        });
    }, [] );

    const resetFilters = () => {
        setFilteredProducts({ products: [] });
        setChosedCategories({ items: [] });
    }


    //When the products are loaded, set the first page of products to display
    useEffect(()=>{

        if(!areProductsLoaded && allProducts.length > 0){

            const trimStart = 0;
            const trimEnd = NUMBER_OF_PRODUCTS_TO_DISPLAY;

            setFilteredProducts({
                products: allProducts.slice(trimStart, trimEnd)
            })
        }
    }, [areProductsLoaded, allProducts]);

    //When no category is selected hide the reset button and show all the products
    useEffect(()=>{
        if(!areProductsLoaded && chosedCategories.items.length < 1){
            setShowResetButton(false)

            const trimStart = 0;
            const trimEnd = NUMBER_OF_PRODUCTS_TO_DISPLAY;

            setFilteredProducts({
                products: allProducts.slice(trimStart, trimEnd)
            })
        }
            
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[chosedCategories, areProductsLoaded])

    return {
        handleCheckboxChange,
        resetFilters,
        setFilteredProducts,
        setShowResetButton,
        chosedCategories,
        showResetButton,
        filteredProducts,
        Categories,
        areCategoriesLoaded,
        allProducts,
        areProductsLoaded
    }
}
