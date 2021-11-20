import React from 'react'

import { StyledFooter, LogoImage } from './styled'

import wizelineAcademyLogo from 'assets/svgs/wizelineAcademyLogo.svg'

const Footer = () => {
    return (
        <StyledFooter>
            <p>© 2021 - Ecommerce created during </p>
            <LogoImage src={wizelineAcademyLogo} alt='Wizeline Academy Logo'/>
            <p> React Bootcamp™</p>
        </StyledFooter>
    )
}

export default Footer
