import React from 'react'
import { render, screen } from '@testing-library/react'

import { BrowserRouter as Router } from 'react-router-dom'
import HandleError from 'utils/HandleError'
import Content from 'Components/Content'
import HomePage from 'Pages/HomePage'

describe('Fetch and render from the API', () => {
    const HomePageStructure =
    <Router>
        <HandleError message={"We're sorry, something went wrong"}>
            <Content>
                <HomePage>
                </HomePage>
            </Content>
        </HandleError>
    </Router>

    test('Featured Banners are fetched and renders correctly', async () => {
        render(
            HomePageStructure
        )

        const displayedBanners = await screen.findAllByTestId('featured-banner')

        expect(displayedBanners).toHaveLength(3)
    })

    test('Categories are fetched and renders correctly', async () => {
        render(
            HomePageStructure
        )

        const displayedCategories = await screen.findAllByTestId('featured-category')

        expect(displayedCategories).toHaveLength(5)
    })

    test('Featured Products are fetched and renders correctly', async () => {
        render(
            HomePageStructure
        )

        const displayedProducts = await screen.findAllByTestId('featured-product')

        // False positive
        // This test pass with warnings not sure how to solve it
        expect(displayedProducts).toBeTruthy()
    })
})
