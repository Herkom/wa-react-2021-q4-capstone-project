import React from 'react';
import {useRoutes} from 'hookrouter';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';
import HomePage from 'Pages/HomePage';
import ProductList from 'Pages/ProductList';

//import getPathname from 'utils/getPathname';

import './styles/App.css'

function App() {

  const routes = {
    '/wa-react-2021-q4-capstone-project/': () => <HomePage />,
    '/wa-react-2021-q4-capstone-project/products': () => <ProductList />,
  };

  const routeResult = useRoutes(routes);

  return (
    <>
      <Header />
      <Content>
        { routeResult }
      </Content>
      <Footer />
    </>
  );
};

export default App
