import React from "react";
import styled from "styled-components";
import { useParams } from "react-router";

import { useFeaturedBanners } from "utils/hooks/useFeaturedBanners";
import { BannerContainer } from "Components/HomePage/styled";
import Slider from "Components/Slider/Slider";
import Button from "Components/Button";

const ProductDetailPageContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DetailsContainer = styled.article`
    display: flex;
    flex-direction: column;
    max-width: 50vw;
`;

const ProductDetailPage = () => {

    let {id} = useParams();
    let productDetails;

    const result = useFeaturedBanners(null, null, "productId", id );

    if(!result.isLoading){
        productDetails = result.data.results[0];
        const {
            data:{
                description,
                images,
                name,
                price,
                sku,
                specs,
                stock,
                category
            },
            tags
        } = productDetails;


        return(
            <>
                <ProductDetailPageContainer>
                    <BannerContainer width={500}>
                        <Slider items={images} width={500}></Slider>
                    </BannerContainer>
                    <DetailsContainer>
                        <label>{name}</label>
                        <label>{price}</label>
                        <label>{sku}</label>
                        <label>{category.slug}</label>
                        {tags.map(element => (
                            <label key={element}>{element}</label>
                        ))}
                        <p>{description[0].text}</p>
                        <input type='text' required defaultValue='1'/>
                        <Button>Add to Cart</Button>
                        <label>{stock}</label>

                        <table>
                            <thead>
                                <tr>
                                    <th>Specifications</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    specs.map( element => (
                                        <tr key={element.spec_name}>
                                            <td>{element.spec_name}</td>
                                            <td>{element.spec_value}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                            
                        </table>
                    </DetailsContainer>
                    
                </ProductDetailPageContainer>
                
            </>
        )
    }

    return <p>Loading...</p>
};

export default ProductDetailPage