import { FC } from "react";
import { Navbar } from "../../Common/Navbar/Navbar"
import { Menubar } from "../../Common/Menubar/Menubar"
import {
    DashboardContainer, ContentContainer, StripeTitle, CardContainer, ImageContainer, ProductInfo,
    ProductName,CategoryName
} from "./Dashboard.css";
import testImage from "../../../Assets/Images/tamplarie.jpg";
import { PageRoutes } from "../../../Utils/Routes";

export const Dashboard: FC = () => {
    return (
        <DashboardContainer>
            <Navbar />
            <Menubar />
            <ContentContainer>
                <StripeTitle>Oferta noastra actuala!</StripeTitle>
                <DashboardContainer>
                    <CardContainer to={PageRoutes.PRODUCT_DETAILS}>
                        <ImageContainer backgroundImg={testImage}></ImageContainer>
                            <ProductInfo>
                                <ProductName>Leonardo</ProductName>
                                <CategoryName>Paturi</CategoryName>
                            </ProductInfo>
                    </CardContainer>
                </DashboardContainer>
            </ContentContainer>
        </DashboardContainer>
      
    );
}