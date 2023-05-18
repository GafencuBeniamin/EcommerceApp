import { FC, useEffect, useState } from "react";
import * as FaIcons from 'react-icons/fa';
import { PageRoutes } from "../../../Utils/Routes";
import { Navbar } from "../../Common/Navbar/Navbar";

import {
    BackButton, NameContainer, ProductDetailContainer, ContentGrid, DetailsContainer, DescriptionContainer,
    Image, ImageContainer, CategoryContainer, TitleContainer, PriceContainer
} from "./ProductDetails.css";
import testImage from "../../../Assets/Images/tamplarie.jpg";
import { useParams } from "react-router-dom";
import { requestUrls } from "../../../Backend/requestUrls";
//import useGetCustomFetch from "../../../Hooks/useGetCustomFetch";
import usePostCustomFetch from "../../../Hooks/usePostCustomFetch";
import { useRedirectHome } from "../../../Hooks/useRedirectHome";
import { ProductType } from "../../../Utils/Types";


export const ProductDetails: FC = () => {
    /*
    const { id } = useParams();
    const productObjectRequestUrl = requestUrls.product.replace(':id', `${id}`);
    const { response: productResponse, fetcher: fetchProduct } = useGetCustomFetch<ProductType, string>(productObjectRequestUrl);
    const {
        fetcher: deleteProductPayload,
    } = usePostCustomFetch<any, any>(`${requestUrls.products}/${id}`, 'DELETE');
    const { navigateHome } = useRedirectHome();

    const [product, setProduct] = useState<ProductType>();

    useEffect(() => {
        fetchProduct();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (productResponse) {
            setProduct(productResponse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productResponse]);
    */
    return (
        <>
            <Navbar />
            <ProductDetailContainer>
                <TitleContainer>
                    <BackButton to={PageRoutes.DASHBOARD}>
                        <FaIcons.FaChevronLeft />
                    </BackButton>
                    <CategoryContainer>
                        Paturi
                    </CategoryContainer>
                    <NameContainer>
                        Leonardo
                    </NameContainer>
                </TitleContainer>
                <hr />
                <ContentGrid>
                    <ImageContainer>
                        <Image backgroundImg={testImage}></Image>
                    </ImageContainer>
                    <DetailsContainer>
                        <DescriptionContainer>
                            Pat de calitate maxima cumparati va rog
                        </DescriptionContainer>
                        <PriceContainer>
                            Pret: 2000 lei
                        </PriceContainer>
                    </DetailsContainer>
                </ContentGrid>
            </ProductDetailContainer>
        </>
    )
}
/*
    return (
        <>
            <Navbar />
            <CarDetailContainer>
                <TitleContainer>
                    <BackButton to={PageRoutes.DASHBOARD}>
                        <FaIcons.FaChevronLeft />
                    </BackButton>
                    <NameContainer>
                        {product?.name}
                    </NameContainer>
                    <CategoryContainer>
                        {product?.category.name}
                    </CategoryContainer>
                </TitleContainer>
                <hr />
                <ContentGrid>
                    <ImageContainer>
                        <Image backgroundImg={product?.imageUrl}></Image>
                    </ImageContainer>
                    <DetailsContainer>
                        <DetailsGrid>
                        </DetailsGrid>
                    </DetailsContainer>
                </ContentGrid>
            </CarDetailContainer>
        </>
    )
}
*/