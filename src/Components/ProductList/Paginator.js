import React from 'react'
import PropTypes from 'prop-types'
import { PaginatorContainer } from 'Components/ProductList/styled'

import rightArrow from 'assets/svgs/right-arrow.svg'
import leftArrow from 'assets/svgs/left-arrow.svg'

// import { selectAPage } from 'utils/hooks/usePager'

const Paginator = ({ numberOfPages, next, prev, state, setStater }) => {
    const pages = Array.from(Array(numberOfPages).keys())

    // Can't find out why I was getting this error:
    // Attempted import error: 'selectAPage' is not exported from 'utils/hooks/usePager'
    const selectAPage = (page) => {
        setStater({
            ...state,
            currentPage: page
        })
    }

    return (
        <PaginatorContainer>
            <img alt={`${leftArrow}`} src={leftArrow} onClick={() => prev()} />
            <ul>
                {pages.map(page => {
                    const index = page + 1
                    return (
                        <li data-testid='paginator-page' key={index} onClick={() => selectAPage(index)}>
                            <p>{index}</p>
                        </li>
                    )
                })}
            </ul>
            <img alt={`${rightArrow}`} src={rightArrow} onClick={() => next()} />
        </PaginatorContainer>
    )
}

Paginator.propTypes = {
    numberOfPages: PropTypes.number,
    next: PropTypes.func,
    prev: PropTypes.func,
    state: PropTypes.object,
    setStater: PropTypes.func
}

export default Paginator
