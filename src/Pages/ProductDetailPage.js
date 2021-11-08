import React from "react";
import { useParams } from "react-router";

import {
    ProductDetailPageContainer,
    DetailsContainer,
    MainDetails,
    ProductName,
    ProductPrice,
    ProductSKU,
    ProductCategory,
    ProductTags,
    ProductDescription,
    AddToCartContainer,
    QtyInputContainer,
    QtyInput,
    QtyButton,
    ProductStock,
    Specs,
    SpecsTitle,
    Spec,
    SpecValue
} from 'Components/ProductDetailPage/styled';

import { useFeaturedBanners } from "utils/hooks/useFeaturedBanners";
import { BannerContainer } from "Components/HomePage/styled";
import Slider from "Components/Slider/Slider";
import Button from "Components/Button/Button";

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