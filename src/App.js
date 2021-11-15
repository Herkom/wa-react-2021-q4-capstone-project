import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import './styles/App.css'

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Content from './Components/Content'
import HomePage from 'Pages/HomePage'
import ProductListPage from 'Pages/ProductListPage'
import SearchResultsPage from 'Pages/SearchResultsPage'
import ProductDetailPage from 'Pages/ProductDetailPage'
import ShoppingCartPage from 'Pages/ShoppingCartPage'
import CheckoutPage from 'Pages/CheckoutPage'

import HandleError from 'utils/HandleError'

function App () {
    return (
        <Router>
            <Header />
            <HandleError message={"We're sorry, something went wrong"}>
                <Content>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/home" />
                        </Route>
                        <Route path="/home">
                            <HomePage />
                        </Route>
                        <Route path="/products">
                            <ProductListPage />
                        </Route>
                        <Route path="/product/:id">
                            <ProductDetailPage />
                        </Route>
                        <Route path="/search" >
                            <SearchResultsPage />
                        </Route>
                        <Route path="/cart" >
                            <ShoppingCartPage/>
                        </Route>
                        <Route path="/checkout" >
                            <CheckoutPage/>
                        </Route>
                    </Switch>
                </Content>
            </HandleError>
            <Footer />
        </Router>
    )
}

export default App
