import React from 'react';

import HomePage from 'Pages/HomePage';
import ProductList from 'Pages/ProductList';


//Probably this is where the router will be
const Content = (props) => {
    return(
        <main>
            <ProductList />
            <HomePage />
        </main>
    );
};

export default Content
