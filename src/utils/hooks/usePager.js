import { useState, useEffect } from 'react'
import { NUMBER_OF_PRODUCTS_TO_DISPLAY } from 'utils/constants'

import { useCategoriesFilter } from 'utils/hooks/useCategoriesFilter'

export const usePager = () => {
    const {
        allProducts,
        areProductsLoaded
    } = useCategoriesFilter()

    const [pager, setPager] = useState({
        numberOfItems: 0,
        numberPerPage: NUMBER_OF_PRODUCTS_TO_DISPLAY,
        currentPage: 1,
        numberOfPages: 0
    })

    const { numberPerPage, currentPage, numberOfPages } = pager

    const nextPage = () => {
        const page = currentPage === numberOfPages ? currentPage : currentPage + 1

        setPager({
            ...pager,
            currentPage: page
        })
    }

    const prevPage = () => {
        const page = currentPage === 1 ? currentPage : currentPage - 1
        setPager({
            ...pager,
            currentPage: page
        })
    }

    useEffect(() => {
        if (!areProductsLoaded) {
            setPager({
                ...pager,
                numberOfItems: allProducts.length,
                numberOfPages: Math.ceil(allProducts.length / numberPerPage)
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [areProductsLoaded])

    return { pager, setPager, numberPerPage, currentPage, numberOfPages, nextPage, prevPage }
}
