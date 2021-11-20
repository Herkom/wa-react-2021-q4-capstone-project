import React from 'react'

import { useMyCartContext } from 'Context/GlobalContext'

import {
    ShoppingCartTableHeader,
    ShoppingCartDataCell
} from 'Components/ShoppingCartPage/styled'

import {
    CheckoutForm
} from 'Components/CheckoutPage/styled'
import Button from 'Components/Button/Button'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
    const { myCart, total } = useMyCartContext()

    return (
        <React.Fragment>
            <CheckoutForm>
                <h1>This is the Checkout page</h1>
                <label htmlFor='fname'>Name</label>
                <input type='text' id='fname' name='fname'/>
                <label htmlFor='femail'>Email</label>
                <input type='text' id='femail' name='femail'/>
                <label htmlFor='fzipcode'>post/zip</label>
                <input type='text' id='fzipcode' name='fzipcode'/>
                <label htmlFor='fnotes'>Notes</label>
                <textarea name='fnotes' rows='4' cols='50'></textarea>

                <table>
                    <thead>
                        <tr>
                            <ShoppingCartTableHeader>Quantity</ShoppingCartTableHeader>
                            <ShoppingCartTableHeader>Product Name</ShoppingCartTableHeader>
                            <ShoppingCartTableHeader>Subtotal</ShoppingCartTableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(myCart).map(([id, product]) => (
                            <tr key={id}>
                                <ShoppingCartDataCell>{product.qty}</ShoppingCartDataCell>
                                <ShoppingCartDataCell>{product.name}</ShoppingCartDataCell>
                                <ShoppingCartDataCell>$ {product.price * product.qty}</ShoppingCartDataCell>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <ShoppingCartDataCell/>
                            <ShoppingCartDataCell><strong>Subtotal:</strong></ShoppingCartDataCell>
                            <ShoppingCartDataCell><strong>$ {total}</strong></ShoppingCartDataCell>
                        </tr>
                    </tfoot>
                </table>
                <Button>Place order</Button>
                <Link to='/cart'>
                    <Button>Go back to cart</Button>
                </Link>

            </CheckoutForm>
        </React.Fragment>
    )
}

export default CheckoutPage
