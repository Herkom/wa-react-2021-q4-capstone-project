import React from 'react';

import { StyledButton } from './styled';

const Button = ({ children, disabled, onClick }) => {
    return(
        <StyledButton disabled={disabled} onClick={onClick} >
            {children}
        </StyledButton>
    );
};

export default React.memo(Button)
