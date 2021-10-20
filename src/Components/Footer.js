import React from "react";
import styled from 'styled-components';

const FooterElement = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    margin-top: 2rem;
    color: white;
    background-color: #666666;
    font: 400 1rem/1.5rem 'Mulish', sans-serif;
`;

const Footer = () => {
    return(
            <FooterElement>
                <p>© 2021 - Ecommerce created during Wizeline’s Academy React Bootcamp™</p>
            </FooterElement>
    );
};

export default Footer
