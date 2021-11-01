import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from 'assets/svgs/logo.svg';
import cartIcon from 'assets/svgs/cart.svg';
import SearchInput from './SearchInput';

const HeaderStyles = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 0;

    @media (max-width: 600px){
        flex-direction: column;
    }

    a{
        text-decoration: none;
    }

    div{
        display: flex;
        align-items: center;
    }
`;

const LogoContainer = styled.div`
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

const Cart = styled.img`
    width: 30px;
    height: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
    margin-left: 1rem;
`;



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
                <Cart
                    alt="Go to review your cart"
                    src={cartIcon}
                />
            </div>
        </HeaderStyles>
    );
};

export default Header
