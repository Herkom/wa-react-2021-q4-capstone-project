import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.button`
    padding: 1rem 1.5rem;
    font-size: 1.5rem;
    background-color: black;
    color: white;
    border: none;
    font: 500 1rem/1.5rem 'Mulish',sans-serif;
    text-align: center;
    margin: 4rem 0 2rem 0;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    transition: all .5s ease;

    &:hover{
        background-color: #e4986a;
    }
`;

const Button = (props) => {

    const goToProductlist = () =>
        window.location = props.goTo;

    return(
        <ButtonStyles onClick={goToProductlist}>
            {props.children}
        </ButtonStyles>
    );
};

export default Button
