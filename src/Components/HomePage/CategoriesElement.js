import React from 'react'
import PropTypes from 'prop-types'
import { CategoryArticle, CategoryImageLink, CategoryTitle } from './styled'

const CategoriesElement = ({ data }) => {
    const {
        name,
        main_image: {
            /* dimensions:{
                width,
                height,
            }, */
            alt,
            url
        }
    } = data

    return (
        <CategoryArticle data-testid='featured-category'>
            <CategoryImageLink>
                <img alt={alt} src={url}/>
            </CategoryImageLink>
            <CategoryTitle>
                {name}
            </CategoryTitle>
        </CategoryArticle>
    )
}

CategoriesElement.propTypes = {
    data: PropTypes.object,
    name: PropTypes.string,
    main_image: PropTypes.object,
    alt: PropTypes.string,
    url: PropTypes.string
}

export default React.memo(CategoriesElement)
