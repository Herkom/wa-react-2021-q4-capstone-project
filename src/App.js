import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
}  from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';
import HomePage from 'Pages/HomePage';
import ProductListPage from 'Pages/ProductListPage';
import SearchResultsPage from 'Pages/SearchResultsPage';

import './styles/App.css'
import ProductDetailPage from 'Pages/ProductDetailPage';

function App() {

  return (
    <Router>
      <Header />
      <Content>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/wa-react-2021-q4-capstone-project/">
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
        </Switch>
      </Content>
      <Footer />
    </Router>
  );
};

export default App
