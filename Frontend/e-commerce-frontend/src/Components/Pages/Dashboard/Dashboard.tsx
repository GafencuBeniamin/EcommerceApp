import { FC, useEffect, useState } from "react";
import { Navbar } from "../../Common/Navbar/Navbar"
import { Menubar } from "../../Common/Menubar/Menubar"
import {
    DashboardContainer, ContentContainer, StripeTitle, CardContainer, ImageContainer, ProductInfo,
    ProductName
} from "./Dashboard.css";
import { PageRoutes } from "../../../Utils/Routes";
import axios from "axios"
import { ProductType } from "../../../Utils/Types";
import { requestUrls } from "../../../Backend/requestUrls";
import testImage from "../../../Assets/Images/ProductsPhotos/Comoda1.jpg";


export const Dashboard: FC = () => {

    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const productsResponse = await axios.get(requestUrls.products);
        setProducts(productsResponse.data);
    };
   
    return (
        <DashboardContainer>
            <Navbar />
            <Menubar />
            <ContentContainer>
                <StripeTitle>Oferta noastra actuala!</StripeTitle>
                <DashboardContainer>
                    {products.map((product, index) => {
                        const finalUrl = PageRoutes.PRODUCT_DETAILS.replace(':id', `${product.id}`);
                        return (
                            <CardContainer to={finalUrl}>
                                <ImageContainer backgroundImg={product.imageUrl}></ImageContainer>
                                <ProductInfo>
                                    <ProductName>{product.name}</ProductName>
                                </ProductInfo>
                            </CardContainer>
                            );

                        return null;
                    })}
                </DashboardContainer>
            </ContentContainer>
        </DashboardContainer>
      
    );
}
