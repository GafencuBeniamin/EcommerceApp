import { FC, useEffect, useState } from "react";
import { MenubarContainer, MenuItemLinks, SpecialMenuItem } from './Menubar.css';
import { PageRoutes } from "../../../Utils/Routes";
import axios from "axios"
import { CategoryType } from "../../../Utils/Types";
import { requestUrls } from "../../../Backend/requestUrls";

export const Menubar: FC = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        const categoriesResponse = await axios.get(requestUrls.categories);
        setCategories(categoriesResponse.data);
    };

    return (
        <MenubarContainer>
            <SpecialMenuItem to={PageRoutes.DASHBOARD}>
                Toate
            </SpecialMenuItem>
            {categories.map((category, index) => {
                const finalUrl = PageRoutes.FILTERED_DASHBOARD.replace(':id', `${category.id}`);
                return (
                        <MenuItemLinks to={finalUrl}>
                                {category.categoryName}
                        </MenuItemLinks>
                );
                return null;
             })}
        </MenubarContainer>
    )
}
