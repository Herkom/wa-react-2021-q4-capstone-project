import React from 'react'
import { Link } from 'react-router-dom'

import { HeaderStyles, LogoContainer, LogoImage, BrandName } from './styled'

import logo from 'assets/svgs/logo.svg'

import SearchInput from '../SearchInput/SearchInput'
import Cart from './Cart'

const Header = () => {
    return (
        <HeaderStyles>
            <Link to="/">
                <LogoContainer>
                    <LogoImage src={logo} alt='logo'/>
                    <BrandName>Möbelhaus</BrandName>
                </LogoContainer>
            </Link>
            <SearchInput/>
            <Link to="/cart">
                <Cart/>
            </Link>
        </HeaderStyles>
    )
}

export default Header
