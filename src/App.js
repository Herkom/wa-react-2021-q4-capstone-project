import React from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';
import HomePage from 'Pages/HomePage';
import ProductList from 'Pages/ProductList';

import getPathname from 'utils/getPathname';

import './styles/App.css'

function App() {

  const routes = {
    '/Products': <ProductList />,
    '/': <HomePage />,
    '/wa-react-2021-q4-capstone-project': <HomePage />,
  };

  const route = getPathname();

  return (
    <>
      <Header />
      <Content>
        { routes[route] ? routes[route] : <p>Nah Nah Nah</p>}
      </Content>
      <Footer />
    </>
  );
};

export default App
