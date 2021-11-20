import Button from 'Components/Button/Button'
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

class HandleError extends React.Component {
    constructor (props) {
        super(props)
        this.state = { hasError: false }
        this.reset = this.reset.bind(this)
    }

    static getDerivedStateFromError (error) {
        if (error) {
            console.log(error.stack)
        }
        return { hasError: true }
    }

    componentDidCatch (error, errorDetails) {
        console.log('Sorry, something went wrong')
        console.log(error)
        console.log(errorDetails)
    }

    reset () {
        this.setState({ hasError: false })
    }

    render () {
        if (this.state.hasError) {
            return (
                <>
                    <h1>
                        { this.props.message }
                    </h1>
                    <Link to='/home'>
                        <Button>Go back to home</Button>
                    </Link>
                </>
            )
        }

        return this.props.children
    }
}

HandleError.propTypes = {
    children: PropTypes.node,
    message: PropTypes.string
}

export default HandleError
