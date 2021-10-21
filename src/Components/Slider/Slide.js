import React from 'react';

import { SlideItem, InfoContainer, Header, Description } from './styled';

const Slide = ({ width, ...props }) => {

    const {
        title,
        description:[
            {text: productDescription}
        ],
        main_image:{
            url: imageURL
        }
    } = props.data;

    return (
        <SlideItem width={width} content={imageURL}>
            <InfoContainer>
                <Header>{title.toLowerCase()}</Header>
                <Description>{productDescription.length > 30 ? '': productDescription}</Description>
            </InfoContainer>
            
        </SlideItem>
    );
};

export default Slide
