import React from 'react';
import { navigate } from 'hookrouter';
import styled from 'styled-components';

import logo from 'assets/svgs/logo.svg';
import searchIcon from 'assets/svgs/search.svg';
import cartIcon from 'assets/svgs/cart.svg';

const HeaderStyles = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 0;

    @media (max-width: 600px){
        flex-direction: column;
    }
`;
const Cart = styled.img`
    width: 30px;
    height: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
`;

const SearchInput = styled.input`
    background: url(${searchIcon}) no-repeat scroll 10px 4px;
    padding-left:30px;
    background-size: 15px;
    border: 2px lightgray solid;
    border-radius: 15px;
    height: 20px;

    @media (max-width: 600px){
        background-position-x: 15px;
        background-position-y: 8px;
        border-radius: 30px;
        height: 30px;
        padding: 0;
        width: 80%;
        margin: 1rem 0;

    }
`;
const LogoContainer = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Mulish',sans-serif;
    color: black;
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
        width: 60px; 
    }
    h1{
        margin-left: 1rem;
    }

    @media (max-width: 600px){
        h1{
            display: none;
        }
    }
`;

const Header = () =>{

    const goToHome = () =>
        navigate("/wa-react-2021-q4-capstone-project/")

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
