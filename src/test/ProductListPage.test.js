import React from 'react'
import { render, screen } from '@testing-library/react'

import { BrowserRouter as Router } from 'react-router-dom'
import HandleError from 'utils/HandleError'
import Content from 'Components/Content'
import ProductListPage from 'Pages/ProductListPage'

const ProductListPageStructure =
    <Router>
        <HandleError message={"We're sorry, something went wrong"}>
            <Content>
                <ProductListPage></ProductListPage>
            </Content>
        </HandleError>
    </Router>

describe('Fetch and render the filters from the API', () => {
    test('If filtered categories are fetched and renders correctly', async () => {
        render(ProductListPageStructure)
        const categories = await screen.findAllByTestId('filter-category')
        expect(categories).toHaveLength(5)
    })
})

describe('Fetch and render products from the API', () => {
    test('if featured Products are fetched and renders correctly', async () => {
        render(
            ProductListPageStructure
        )

        const displayedProducts = await screen.findAllByTestId('featured-product')

        expect(displayedProducts.length).toBeGreaterThan(1)
    })
})

describe('Paginator works properly', () => {
    test('If the right number of pages is displayed', async () => {
        render(ProductListPageStructure)

        const displayedPages = await screen.findAllByTestId('paginator-page')

        expect(displayedPages).toHaveLength(3)
    })
})
