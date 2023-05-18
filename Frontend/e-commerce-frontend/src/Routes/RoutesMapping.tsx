import { FC } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Welcome } from "../Components/Pages/Welcome/Welcome";
import { Dashboard } from "../Components/Pages/Dashboard/Dashboard";
import { PageRoutes } from "../Utils/Routes";
import { About } from "../Components/Pages/About/About";
import { Config } from "../Utils/Config";
import { welcomePageValues } from "../Utils/HardcodedConfigs";
import { Login } from "../Components/Pages/Login/Login";
import { PageNotFound } from "../Components/Pages/PageNotFound/PageNotFound";
import { ProductDetails } from "../Components/Pages/ProductDetails/ProductDetails";
import { FilteredDashboard } from "../Components/Pages/Dashboard/FilteredDashboard";

export const RoutesMapping: FC = () => {
    const config = Config.getInstance();
    config.WelcomePageConfig = welcomePageValues;

    const pageRoutes = [
        { path: PageRoutes.HOME, component: <Welcome config={config.WelcomePageConfig} /> },
        { path: PageRoutes.DASHBOARD, component: <Dashboard /> },
        { path: PageRoutes.LOGIN,component: <Login />},
        { path: PageRoutes.PAGE_NOT_FOUND, component: <PageNotFound /> },
        { path: PageRoutes.ABOUT, component: <About /> },
        { path: PageRoutes.PRODUCT_DETAILS, component: <ProductDetails /> },
        { path: PageRoutes.FILTERED_DASHBOARD, component: <FilteredDashboard /> }
    ];

    return (
        <Routes>
            {pageRoutes.map((route) => {
                return (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.component}
                    />
                )
            })}
        </Routes>
    )
}
