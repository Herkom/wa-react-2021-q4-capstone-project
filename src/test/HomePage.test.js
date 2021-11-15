import React from 'react'
import { render } from '@testing-library/react'

import HomePage from 'Pages/HomePage'

test('Featured Banners Slider is fetching and rendering data from the API', () => {
    render(<HomePage/>)

    console.log('hicimos algo')
})
