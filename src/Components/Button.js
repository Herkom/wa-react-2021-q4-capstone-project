import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.div`
    padding: 1rem 1.5rem;
    font-size: 1.5rem;
    background-color: black;
    color: white;
    border: none;
    font: 500 1rem/1.5rem 'Mulish',sans-serif;
    text-align: center;
    margin: 2rem 0;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    transition: all .5s ease;

    &:hover{
        background-color: #e4986a;
    }
`;

const Button = (props) => {
    return(
        <ButtonStyles>
            {props.children}
        </ButtonStyles>
    );
};

export default Button
