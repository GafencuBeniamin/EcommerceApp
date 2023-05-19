import { FC, useEffect, useState } from "react";
import * as FaIcons from 'react-icons/fa';
import { PageRoutes } from "../../../Utils/Routes";
import { Navbar } from "../../Common/Navbar/Navbar";

import {
    BackButton, NameContainer, ProductDetailContainer, ContentGrid, DetailsContainer, DescriptionContainer,
    Image, ImageContainer, CategoryContainer, TitleContainer, PriceContainer
} from "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { requestUrls } from "../../../Backend/requestUrls";
import { CategoryType, ProductType } from "../../../Utils/Types";
import axios from "axios";


export const ProductDetails: FC = () => {
    
    const { id } = useParams();
    const [product, setProduct] = useState<ProductType>();

    useEffect(() => {
        fetchProduct();
    }, []);
    const productByIdUrl = requestUrls.product.replace(':id', `${id}`);
    const fetchProduct = async () => {
        const productResponse = await axios.get(productByIdUrl);
        setProduct(productResponse.data);
    };

    const [categories, setCategories] = useState<CategoryType[]>([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        const categoriesResponse = await axios.get(requestUrls.categories);
        setCategories(categoriesResponse.data);
    };
    
    return (
        <>
            <Navbar />
            <ProductDetailContainer>
                <TitleContainer>
                    <BackButton to={PageRoutes.DASHBOARD}>
                        <FaIcons.FaChevronLeft />
                    </BackButton>
                    
                    {categories.map((category, index) => {
                        if (product?.categoryId === category.id)
                        return (
                            <CategoryContainer>
                                {category.categoryName}
                            </CategoryContainer>
                        );
                        return null;
                    })}
                    <NameContainer>
                        {product?.name}
                    </NameContainer>
                </TitleContainer>
                <hr />
                <ContentGrid>
                    <ImageContainer>
                        <Image backgroundImg={product?.imageUrl}></Image>
                    </ImageContainer>
                    <DetailsContainer>
                        <DescriptionContainer>
                            {product?.description}
                        </DescriptionContainer>
                        <PriceContainer>
                            Pret: {product?.price} lei
                        </PriceContainer>
                    </DetailsContainer>
                </ContentGrid>
            </ProductDetailContainer>
        </>
    )
}