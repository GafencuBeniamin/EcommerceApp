import styled from "styled-components";
import { Colors, Breakpoints, maxWidthQuery } from "../../../Utils/cssMedia";

type ImgProps = {
    backgroundImg?: string;
};

export const AboutContainer = styled.div`
        background: ${Colors.white};
`;
export const AboutTitle = styled.div`
    padding: 2rem;
    font-size: 75px;
    text-align:center;
`;
export const AboutText = styled.div`

`;

export const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: auto 50%;
    justify-content: space-evenly;
    flex-direction: row;
    width: 100%;
  
    ${maxWidthQuery(Breakpoints.small)} {
        grid-template-columns: 100%;
    }
`;
export const Image = styled.img`
    margin-top: 50px;
    width: 100%;
    scale: 100%;
`;

export const Description = styled.div`
    margin-top: 50px;
    display: grid;
    position: relative;
    top: 20px;
    gap: 30px;
    font-size:19px;
    ${maxWidthQuery(Breakpoints.small)} {
         gap: 10px;
    }
`;