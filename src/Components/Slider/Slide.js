import PropTypes from 'prop-types';

import { SlideItem, InfoContainer, Header, Description } from './styled';

const Slide = ({ width, ...props }) => {

    if(props.data){
        const {
            title,
            description:[
                {text}
            ],
            main_image
        } = props.data;

        //Shoul I just leave de slice???
        const productDescription =  text.length > 30
                                    ? text.slice(0,30) + '...'
                                    : text

        return (
            //I've just find out that SlideItem returns a li instead of a img tag
            <SlideItem width={width} >
                <img alt={title} src={main_image.url}/>
                <InfoContainer>
                    <Header>{title.toLowerCase()}</Header>
                    <Description>
                        { productDescription }
                    </Description>
                </InfoContainer>
                
            </SlideItem>
        );
    }

    return(
        <SlideItem width={width}>
            <img alt={props.image.url} src={props.image.url}/>
        </SlideItem>
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
