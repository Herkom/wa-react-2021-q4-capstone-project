import React from 'react'

import PropTypes from 'prop-types'

import { Container } from './styled'

const SliderContainer = ({ width, translate, transition, children }) => {
    return (
        <Container width={width} translate={translate} transition={transition}>
            {children}
        </Container>
    )
}

SliderContainer.propTypes = {
    width: PropTypes.number,
    translate: PropTypes.number,
    transition: PropTypes.number,
    children: PropTypes.node
}

export default SliderContainer
