import React from "react";
import styled from 'styled-components';

import wizelineAcademyLogo from 'assets/svgs/wizelineAcademyLogo.svg';

const FooterElement = styled.footer`
    display: flex;
    justify-content: center;
    padding: 2rem 0;
    margin-top: 2rem;
    color: white;
    background-color: #666666;
    font: 400 1rem/1.5rem 'Mulish', sans-serif;

    img{
        height: 30px;
        margin: 0 1rem;
    }
`;

const Footer = () => {
    return(
            <FooterElement>
                <p>© 2021 - Ecommerce created during </p> 
                <img src={wizelineAcademyLogo} alt='Wizeline Academy Logo'/>
                <p> React Bootcamp™</p>
            </FooterElement>
    );
};

export default Footer
