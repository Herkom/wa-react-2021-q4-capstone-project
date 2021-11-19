import React, { useState } from 'react'
import { useMyCartContext } from 'Context/GlobalContext'
import { useParams } from 'react-router'
import up from '../assets/svgs/up.svg'
import down from '../assets/svgs/down.svg'

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
    QtyIcon,
    ProductStock,
    Specs,
    SpecsTitle,
    Spec,
    SpecValue
} from 'Components/ProductDetailPage/styled'

import { useFeaturedBanners } from 'utils/hooks/useFeaturedBanners'
import { BannerContainer } from 'Components/HomePage/styled'
import Slider from 'Components/Slider/Slider'
import Button from 'Components/Button/Button'

const ProductDetailPage = () => {
    const { id } = useParams()
    const { data, isLoading } = useFeaturedBanners(null, null, 'productId', id)
    const { addToMyCart } = useMyCartContext()
    const [productsSelected, setProductsSelected] = useState(1)

    if (!isLoading) {
        const productDetails = data.results[0]

        const {
            description,
            images,
            name,
            price,
            sku,
            stock,
            specs,
            category
        } = productDetails.data

        const tags = productDetails.tags

        const increaseNumber = () => {
            if (productsSelected < stock) {
                setProductsSelected(prevState => prevState + 1)
            }
        }

        const decreaseNumber = () => {
            if (productsSelected !== 0) {
                setProductsSelected(prevState => prevState - 1)
            }
        }

        const action = stock === 0
            ? null
            : () => {
                addToMyCart(id && id, data && data.results[0].data, productsSelected)
            }

        const changeHandler = (e) => {
            setProductsSelected(e.value)
        }

        return (
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
                        <label>
                            <ProductCategory>
                                <strong>Category: </strong>{category.slug}
                            </ProductCategory>
                        </label>
                        <ProductTags>
                            <strong>Tags: </strong>
                            {tags.map(element => (
                                <label key={element}>{element}</label>
                            ))}
                        </ProductTags>
                        <ProductDescription>{description[0].text}</ProductDescription>
                        <AddToCartContainer>
                            <QtyInputContainer>
                                <QtyInput type='number' onChange={changeHandler} required value={productsSelected}/>
                                <span>
                                    <QtyButton onClick={increaseNumber}>
                                        <QtyIcon alt='Increase product number' src={up}/>
                                    </QtyButton>
                                    <QtyButton onClick={decreaseNumber}>
                                        <QtyIcon alt='Decrease product number' src={down}/>
                                    </QtyButton>
                                </span>
                            </QtyInputContainer>
                            <Button disabled={stock === 0} onClick={ action }>Add to cart</Button>
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
                                    specs.map(element => (
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

    return <div>Loading...</div>
}

export default ProductDetailPage
