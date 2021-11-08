import React from "react";
import { useLocation } from "react-router";
import { useFeaturedBanners } from "utils/hooks/useFeaturedBanners";

import { ProductContainer } from 'Components/ProductList/styled';
import ProductElement from "Components/HomePage/ProductElement";
import Paginator from "Components/ProductList/Paginator";

//To it's own file
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const SearchResultsPage = () => {

    const query = useQuery();
    const queryValue = query.get("q");

    const result = useFeaturedBanners('product', 20, 'searchTerm', queryValue);

    if(!result.isLoading){

        const data = result.data.results;

        if(data.length > 0)
            return(
                <>
                    <ProductContainer>
                        {
                            data.map( item => {
                                return(
                                    <li key={item.id}>
                                        <ProductElement showCategory showShortDescription {...item} />
                                    </li>
                                )
                            })
                        }
                    </ProductContainer>
                    <Paginator numberOfProducts={data.length} numberItemsInGroup={20}/>
                </>
            )

        return <h1>We're sorry, we couldn't find any product related to your search. Please try again.</h1>
    }

    return <p>Now loading...</p>
};

export default SearchResultsPage