import React from 'react';

import { useMyCartContext } from "Context/GlobalContext"

import { StyledButton } from './styled';

const Button = ({ children, propsForFunction }) => {
    
    const { addToMyCart } = useMyCartContext();

    return(
        <StyledButton onClick={()=>{addToMyCart(propsForFunction?.productId, propsForFunction?.data)}} >
            {children}
        </StyledButton>
    );
};

export default Button
