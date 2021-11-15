
// This feels weird
/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import { useMyCartContext } from 'Context/GlobalContext'
import Button from 'Components/Button/Button'
import { Link } from 'react-router-dom'
import { ProductHoverButton, Article, Text, Name, SKU, ImageContainer } from './styled'

const ProductElement = ({ id, data, showCategory, showShortDescription }) => {
    const { addToMyCart } = useMyCartContext()

    const productId = id

    const {
        name,
        sku,
        category,
        mainimage,
        price,
        // Again, not sure if this is ok
        // eslint-disable-next-line camelcase
        short_description,
        stock
    } = data

    const action = stock === 0
        ? null
        : () => {
            addToMyCart(id && id, data && data)
        }

    return (
        <Article>
            {showCategory && <Text>{category.slug}</Text>}
            <ImageContainer>
                <img alt={mainimage.alt} src={mainimage.url}/>
            </ImageContainer>
            <Name>{name}</Name>
            <SKU>SKU: {sku}</SKU>
            <Text>$ {price}</Text>
            {showShortDescription && <p>{short_description}</p>}

            <ProductHoverButton>
                <Button
                    disabled={stock === 0}
                    onClick={ action }>Add to cart</Button>
                <Link to={`/product/${productId}`}>
                    <Button>View details</Button>
                </Link>
            </ProductHoverButton>
        </Article>
    )
}

ProductElement.propTypes = {
    id: PropTypes.string,
    data: PropTypes.object,
    showCategory: PropTypes.bool,
    showShortDescription: PropTypes.bool,
    name: PropTypes.string,
    sku: PropTypes.string,
    category: PropTypes.array,
    mainimage: PropTypes.array,
    price: PropTypes.number,
    short_description: PropTypes.string,
    stock: PropTypes.number
}

export default React.memo(ProductElement)
