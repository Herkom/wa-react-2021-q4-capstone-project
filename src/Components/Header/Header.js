import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderStyles, LogoContainer, Cart } from './styled';

import logo from 'assets/svgs/logo.svg';
import cartIcon from 'assets/svgs/cart.svg';
import SearchInput from '../SearchInput/SearchInput';

const Header = () =>{
    return (
        <HeaderStyles>
            <Link to="/">
                <LogoContainer>
                    <img src={logo} alt='logo'/>
                    <h1>Möbelhaus</h1>
                </LogoContainer>
            </Link>
            <div>
                <SearchInput/>
                <Link to="/cart">
                    <Cart
                        alt="Go to review your cart"
                        src={cartIcon}
                    />
                </Link>
            </div>
        </HeaderStyles>
    );
};

export default Header
