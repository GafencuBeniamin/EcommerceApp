import { FC } from 'react';
import { MenubarContainer, MenuItemLinks, SpecialMenuItem } from './Menubar.css';
import { PageRoutes } from "../../../Utils/Routes";



export const Menubar: FC = () => {

    return (
        <MenubarContainer>
            <SpecialMenuItem>
                Toate
            </SpecialMenuItem>
            <MenuItemLinks>
                Paturi
            </MenuItemLinks>
            <MenuItemLinks>
                Birouri
            </MenuItemLinks>
            <MenuItemLinks>
                Dulapuri
            </MenuItemLinks>
            <MenuItemLinks>
                Noptiere
            </MenuItemLinks>
        </MenubarContainer>
    )
}
