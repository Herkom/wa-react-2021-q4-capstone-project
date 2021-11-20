import React from 'react'

import PropTypes from 'prop-types'

import { SlideItem, InfoContainer, Header, Description } from './styled'

const Slide = ({ width, data, image }) => {
    if (data) {
        const {
            title,
            // Not sure if in the next two cases it's ok to disable the eslint rule
            // eslint-disable-next-line react/prop-types
            description: [
                { text }
            ],
            // eslint-disable-next-line camelcase
            main_image
        } = data

        // Shoul I just leave de slice???
        const productDescription = text.length > 30
            ? text.slice(0, 30) + '...'
            : text

        return (
            // I've just find out that SlideItem returns a li instead of a img tag
            <SlideItem data-testid='featured-banner' width={width} >
                <img alt={title} src={main_image.url}/>
                <InfoContainer>
                    <Header>{title.toLowerCase()}</Header>
                    <Description>
                        { productDescription }
                    </Description>
                </InfoContainer>

            </SlideItem>
        )
    }

    return (
        <SlideItem width={width}>
            <img alt={image.url} src={image.url}/>
        </SlideItem>
    )
}

Slide.propTypes = {
    width: PropTypes.number,
    data: PropTypes.shape({
        title: PropTypes.string,
        main_image: PropTypes.shape({
            url: PropTypes.string
        })
    }),
    image: PropTypes.object,
    description: PropTypes.array
}

export default Slide
