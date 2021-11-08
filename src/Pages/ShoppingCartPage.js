import { useMyCartContext } from "Context/GlobalContext"


const ShoppingCartPage = () => {

    const {myCart} = useMyCartContext();

    return (
    <>
        <h1>Shopping Cart Page</h1>
        <section>
            <table>
                <thead>
                    <tr>
                        <th>Quantity</th>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(myCart).map(([id, product]) => (
                        <tr key={id}>
                            <th>{product.qty}</th>
                            <th><img alt={product.mainimage?.alt} src={product.mainimage?.url}/></th>
                            <th>{product.name}</th>
                            <th>{product.price}</th>
                            <th>{product.price * product.qty}</th>
                        </tr>
                    ))}                    
                </tbody>

            </table>
            
        </section>
    </>
    )
}

export default ShoppingCartPage