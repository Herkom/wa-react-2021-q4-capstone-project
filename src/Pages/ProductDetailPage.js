import React from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import { fontTypes } from "styles/baseFonts";

import { useFeaturedBanners } from "utils/hooks/useFeaturedBanners";
import { BannerContainer } from "Components/HomePage/styled";
import Slider from "Components/Slider/Slider";
import Button from "Components/Button/Button";

const ProductDetailPageContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DetailsContainer = styled.article`
    display: flex;
    flex-direction: column;
    max-width: 35vw;
`;
const MainDetails = styled.div`
    margin:1rem 0;
`;
const ProductName = styled.h1`
    font-family: var(--main-font);
    ${fontTypes.titleDesktop}
`;
const ProductPrice = styled.h2`
    font-family: var(--secondary-font);
    ${fontTypes.subtitle2Desktop}
`;
const ProductSKU = styled.p`
    font-family: var(--secondary-font);
    ${fontTypes.caption}
`;
const ProductCategory = styled.p`
    font-family: var(--secondary-font);
    ${fontTypes.paragraph}
`;
const ProductTags = styled.div`
    display: flex;
    font-family: var(--secondary-font);
    ${fontTypes.paragraph}

    label{
        margin: 0 5px;
    }
`;
const ProductDescription = styled(ProductSKU)`
    margin: 10px 0;
    width: 80%;
`;
const AddToCartContainer = styled.div`
    display: flex;
    margin: 1rem 0;


    div{
        margin: 0 1rem 0 0;
    }
`;
const QtyInputContainer = styled.div`
    display: flex;
    width: 3.5rem;
    position: relative;
    height: 3rem;

    span{
        position: absolute;
        margin-right: 0px;
        height: 3rem;
        display: flex;
        flex-direction: column;
        right: 0;
    }
`;

const QtyInput = styled.input`
    color: #232323;
    background-color: white;
    height: 3rem;
    padding: 0.175rem 0.5rem;
    width: 3rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
    box-sizing: border-box;
    
    &::-webkit-outer-spin-button{
        -webkit-appearance: none;
    }

    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    &:focus-visible{
        border: 1px solid rgba(0, 0, 0, 0.1);
        outline: none;
    }
`;

const QtyButton = styled.button`
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: white;
    box-shadow: none;
    height: 50%;
    box-sizing: border-box;
    width: 1.5rem;
`;

const ProductStock = styled(ProductCategory)``;

const Specs = styled.table`
    width: 80%;
    margin-top: 1rem;
`;

const SpecsTitle = styled.th`
    font-family: var(--secondary-font);
    ${fontTypes.subtitle2Desktop}
`;

const Spec = styled.td`
    font-family: var(--secondary-font);
    ${fontTypes.paragraphBold}
`;
const SpecValue = styled.td`
    font-family: var(--secondary-font);
    ${fontTypes.paragraph}
`;

const ProductDetailPage = () => {

    let {id} = useParams();

    const result = useFeaturedBanners(null, null, "productId", id );

    if(!result.isLoading){

        let productDetails = result.data.results[0];

        const {
            description,
            images,
            name,
            price,
            sku,
            specs,
            stock,
            category
        } = productDetails.data;

        const tags = productDetails.tags;

        return(
            <>
                <ProductDetailPageContainer>
                    <BannerContainer width={500} height={600}>
                        <Slider items={images} width={500} height={600}></Slider>
                    </BannerContainer>
                    <DetailsContainer>
                        <MainDetails>
                            <label><ProductName>{name}</ProductName></label>
                            <label><ProductPrice>$ {price}</ProductPrice></label>
                            <label><ProductSKU>SKU: {sku}</ProductSKU></label>
                        </MainDetails>
                        <label><ProductCategory><strong>Category: </strong>{category.slug}</ProductCategory></label>
                        <ProductTags>
                            <strong>Tags: </strong>
                            {tags.map(element => (
                                <label key={element}>{element}</label>
                            ))}
                        </ProductTags>
                        <ProductDescription>{description[0].text}</ProductDescription>

                        <AddToCartContainer>
                            <QtyInputContainer>
                                <QtyInput type='number' required defaultValue='1'/>
                                <span>
                                    <QtyButton/>
                                    <QtyButton/>
                                </span>
                            </QtyInputContainer>
                            <Button>Add to Cart</Button>
                        </AddToCartContainer>

                        <label><ProductStock><strong>Stock: </strong>{stock}</ProductStock></label>

                        <Specs>
                            <thead>
                                <tr>
                                    <SpecsTitle>Specifications</SpecsTitle>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    specs.map( element => (
                                        <tr key={element.spec_name}>
                                            <Spec>{element.spec_name}</Spec>
                                            <SpecValue>{element.spec_value}</SpecValue>
                                        </tr>
                                    ))
                                }
                            </tbody>
                            
                        </Specs>
                    </DetailsContainer>
                    
                </ProductDetailPageContainer>
                
            </>
        )
    }

    return <p>Loading...</p>
};

export default ProductDetailPage