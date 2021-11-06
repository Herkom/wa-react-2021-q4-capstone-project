import PropTypes from 'prop-types';

import { SlideItem, InfoContainer, Header, Description } from './styled';

const Slide = ({ width, ...props }) => {

    if(props.data){
        const {
            title,
            description:[
                {text: productDescription}
            ],
            main_image
        } = props.data;

        return (
            <SlideItem width={width} content={main_image.url}>
                <InfoContainer>
                    <Header>{title.toLowerCase()}</Header>
                    <Description>
                        {   
                            productDescription.length > 30
                            ? productDescription.slice(0,30)
                            : productDescription

                            //Shoul I just leave de slice???
                        }
                    </Description>
                </InfoContainer>
                
            </SlideItem>
        );
    }

    return(
        <SlideItem width={width} content={props.image.url}></SlideItem>
    )

};

Slide.propTypes = {
    width: PropTypes.number,
    data: PropTypes.shape({
        title: PropTypes.string,
        main_image: PropTypes.shape({
            url: PropTypes.string
        }) 
    })
};

export default Slide;
