import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderStyles, LogoContainer } from './styled';

import logo from 'assets/svgs/logo.svg';

import SearchInput from '../SearchInput/SearchInput';
import Cart from './Cart';

const Header = () =>{
    return (
        <HeaderStyles>
            <Link to="/">
                <LogoContainer>
                    <img src={logo} alt='logo'/>
                    <h1>Möbelhaus</h1>
                </LogoContainer>
            </Link>
            <SearchInput/>
            <Link to="/cart">
                <Cart/>
            </Link>
        </HeaderStyles>
    );
};

export default Header
