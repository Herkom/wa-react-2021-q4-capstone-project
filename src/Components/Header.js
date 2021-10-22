import React from 'react';
import styled from 'styled-components';

import logo from 'assets/svgs/logo.svg';
import searchIcon from 'assets/svgs/search.svg';
import cartIcon from 'assets/svgs/cart.svg';

const HeaderStyles = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 0;
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
const LogoContainer = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Mulish',sans-serif;
    color: black;
    display: flex;
    align-items: center;

    img {
        width: 60px; 
    }
    h1{
        margin-left: 1rem;
    }
`;

const Header = () =>{

    const goToHome = () =>
        window.location.pathname = "/"

    return (
        <HeaderStyles>
            <LogoContainer onClick={goToHome}>
                <img src={logo} alt='logo'/>
                <h1>Möbelhaus</h1>
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
