import { FC } from "react";
import { Navbar } from "../../Common/Navbar/Navbar"
import { Menubar } from "../../Common/Menubar/Menubar"
import { DashboardContainer } from "./Dashboard.css";

export const Dashboard: FC = () => {
    return (
        <DashboardContainer>
            <Navbar />
            <Menubar />
        </DashboardContainer>
      
    );
}