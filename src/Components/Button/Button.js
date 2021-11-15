import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './styled'

const Button = ({ children, disabled, onClick }) => {
    return (
        <StyledButton disabled={disabled} onClick={onClick} >
            {children}
        </StyledButton>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
}

export default React.memo(Button)
