import React from 'react'
import PropTypes from 'prop-types'

// Probably this is where the router will be
const Content = ({ children }) => {
    return (
        <main>
            {children}
        </main>
    )
}

Content.propTypes = {
    children: PropTypes.node
}

export default Content
