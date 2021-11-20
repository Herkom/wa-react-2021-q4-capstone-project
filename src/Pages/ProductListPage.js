import React from 'react'
import { H1Header, ProductContainer, ProductListSection, CategoriesContainer } from 'Components/ProductList/styled'
import ProductElement from 'Components/HomePage/ProductElement'
import ProductSkeleton from 'Components/ProductList/ProductSkeleton'
import Paginator from 'Components/ProductList/Paginator'

import { useCategoriesFilter } from 'utils/hooks/useCategoriesFilter'
import { usePager } from 'utils/hooks/usePager'

const ProductListPage = () => {
    const {
        pager,
        setPager,
        numberOfPages,
        nextPage,
        prevPage
    } = usePager()

    const {
        handleCheckboxChange,
        resetFilters,
        showResetButton,
        filteredProducts,
        Categories,
        areCategoriesLoaded,
        areProductsLoaded
    } = useCategoriesFilter()

    // Not sure if if this what Victor was referring to on the PR comment
    const loadedProducts = !areProductsLoaded
        ? filteredProducts.products.map((item, index) => {
            return (
                <li key={index}>
                    <ProductElement showCategory {...item} />
                </li>
            )
        })
        : filteredProducts.products.map((item, index) => {
            return (
                <li key={index}>
                    <ProductSkeleton/>
                </li>
            )
        })

    return (
        <>
            <H1Header>This is the Product List Page</H1Header>
            <ProductListSection>
                <CategoriesContainer>
                    <h2>Categories</h2>
                    {
                        !areCategoriesLoaded &&
                            <ul>
                                {Categories.results.map(item => (
                                    <li key={item.id}>
                                        <label>
                                            <input data-testid='filter-category' name={item.data.name} type='checkbox' onClick={handleCheckboxChange}/>
                                            {item.data.name}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                    }
                    {
                        showResetButton && <input type="reset" value="Clear filters" onClick={resetFilters}/>
                    }
                </CategoriesContainer>
                <ProductContainer>
                    { loadedProducts }
                </ProductContainer>
                <Paginator numberOfPages={numberOfPages} next={nextPage} prev={prevPage} state={pager} setStater={setPager}/>
            </ProductListSection>
        </>
    )
}

export default ProductListPage
