import { FC } from 'react';
import { NavbarContainer, Title, LinksContainer, LinkText } from './Navbar.css';
import { PageRoutes } from "../../../Utils/Routes";



export const Navbar: FC = () => {

    return (
        <NavbarContainer>
            <Title>
                Tamplaria X
            </Title>
            <LinksContainer>
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
