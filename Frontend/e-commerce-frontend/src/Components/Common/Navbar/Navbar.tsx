import { FC } from 'react';
import { NavbarContainer, Title, LinksContainer, LinkText, DetailText } from './Navbar.css';
import { PageRoutes } from "../../../Utils/Routes";



export const Navbar: FC = () => {

    return (
        <NavbarContainer>
            <Title>
                Tamplaria X
            </Title>
            <LinksContainer>
                <DetailText>
                    Pentru comenzi: 0712345678 sau
                    tamplarie@yahoo.com
                </DetailText>
                <LinkText to={PageRoutes.DASHBOARD}>
                    Dashboard
                </LinkText>
                <LinkText to={PageRoutes.ABOUT}>
                    About Us
                </LinkText>
            </LinksContainer>
        </NavbarContainer>
    )
}
