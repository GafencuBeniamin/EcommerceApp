import { FC } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Welcome } from "../Components/Pages/Welcome/Welcome";
//import { Dashboard } from "../Components/Pages/Dashboard/Dashboard";
import { PageRoutes } from "../Utils/Routes";
//import { Register } from "../Components/Pages/Register/Register";
import { Config } from "../Utils/Config";
import { welcomePageValues } from "../Utils/HardcodedConfigs";
//import { Login } from "../Components/Pages/Login/Login";
import { PageNotFound } from "../Components/Pages/PageNotFound/PageNotFound";

export const RoutesMapping: FC = () => {
    const config = Config.getInstance();
    config.WelcomePageConfig = welcomePageValues;

    const pageRoutes = [
        { path: PageRoutes.HOME, component: <Welcome config={config.WelcomePageConfig} /> },
        //{ path: PageRoutes.DASHBOARD, component: <Dashboard /> },
        //{ path: PageRoutes.REGISTER, component: <Register />},
        //{ path: PageRoutes.LOGIN,component: <Login />},
        { path: PageRoutes.PAGE_NOT_FOUND, component: <PageNotFound /> },
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
