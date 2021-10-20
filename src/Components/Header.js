import React from 'react';
import styled from 'styled-components';

import logo from 'assets/svgs/logo.svg';
import searchIcon from 'assets/svgs/search.svg';
import cartIcon from 'assets/svgs/cart.svg';

const HeaderStyles = styled.header`
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
const Cart = styled.img`
    width: 30px;
    height: 30px;
    background-size: contain;
    background-repeat: no-repeat;
`;
const SearchInput = styled.input`
    background: url(${searchIcon}) no-repeat scroll 10px 4px;
    padding-left:30px;
    background-size: 15px;
    border: 2px lightgray solid;
    border-radius: 15px;
    height: 20px;
`;
const LogoContainer = styled.div`
    width: 60px;
`;

const Header = () =>{
    return (
        <HeaderStyles>
            <LogoContainer>
                <img src={logo} alt='logo'/>
            </LogoContainer>
            <SearchInput/>
            <Cart
                alt="Go to review your cart"
                src={cartIcon}
            />
        </HeaderStyles>
    );
};

export default Header
