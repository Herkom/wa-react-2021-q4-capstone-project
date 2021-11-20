import React from 'react'

import { useMyCartContext } from 'Context/GlobalContext'
import { CartContainer, CartBadge, CartImage } from './styled'

import cartIcon from 'assets/svgs/cart.svg'

const Cart = () => {
    const { myCart } = useMyCartContext()
    const prodsInCart = Object.keys(myCart).length

    return (
        <CartContainer>
            <CartImage alt="Go to review your cart" src={cartIcon}/>
            <CartBadge style={{ display: `${prodsInCart > 0 ? 'flex' : 'none'}` }} >{prodsInCart}</CartBadge>
        </CartContainer>
    )
}

export default Cart
