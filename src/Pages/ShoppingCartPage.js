import { useMyCartContext } from 'Context/GlobalContext'
import deleteIcon from 'assets/svgs/delete.svg'

import {
    ShoppingCartSection,
    ShoppingCartHeader,
    ShoppingCartRow,
    ShoppingCartTableHeader,
    ShoppingCartProdImage,
    ShoppingCartDataCell,
    ShoppingCartRemoveArticle
} from 'Components/ShoppingCartPage/styled'
import { Link } from 'react-router-dom'
import Button from 'Components/Button/Button'
import React from 'react'

const ShoppingCartPage = () => {
    const { myCart, removeFromCart, total } = useMyCartContext()

    return (
        <React.Fragment>
            <ShoppingCartSection>
                <ShoppingCartHeader>Shopping Cart Page</ShoppingCartHeader>
                <table>
                    <thead>
                        <tr>
                            <ShoppingCartTableHeader>Quantity</ShoppingCartTableHeader>
                            <ShoppingCartTableHeader>Product Image</ShoppingCartTableHeader>
                            <ShoppingCartTableHeader>Product Name</ShoppingCartTableHeader>
                            <ShoppingCartTableHeader>Price</ShoppingCartTableHeader>
                            <ShoppingCartTableHeader>Subtotal</ShoppingCartTableHeader>
                            <ShoppingCartTableHeader></ShoppingCartTableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(myCart).map(([id, product]) => (
                            <ShoppingCartRow key={id}>
                                <ShoppingCartDataCell>{product.qty}</ShoppingCartDataCell>
                                <ShoppingCartDataCell>
                                    <ShoppingCartProdImage
                                        alt={product.mainimage?.alt}
                                        src={product.mainimage?.url} />
                                </ShoppingCartDataCell>
                                <ShoppingCartDataCell>{product.name}</ShoppingCartDataCell>
                                <ShoppingCartDataCell>$ {product.price}</ShoppingCartDataCell>
                                <ShoppingCartDataCell>$ {product.price * product.qty}</ShoppingCartDataCell>
                                <ShoppingCartDataCell>
                                    <ShoppingCartRemoveArticle onClick={ () => removeFromCart(id)} alt='Delete article from the cart' src={deleteIcon}/>
                                </ShoppingCartDataCell>
                            </ShoppingCartRow>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <ShoppingCartDataCell/>
                            <ShoppingCartDataCell/>
                            <ShoppingCartDataCell/>
                            <ShoppingCartDataCell><strong>Subtotal:</strong></ShoppingCartDataCell>
                            <ShoppingCartDataCell><strong>$ {total}</strong></ShoppingCartDataCell>
                            <ShoppingCartDataCell/>
                        </tr>
                    </tfoot>
                </table>

                <Link to='/checkout'>
                    <Button>Proceed to checkout</Button>
                </Link>
            </ShoppingCartSection>
        </React.Fragment>
    )
}

export default ShoppingCartPage
