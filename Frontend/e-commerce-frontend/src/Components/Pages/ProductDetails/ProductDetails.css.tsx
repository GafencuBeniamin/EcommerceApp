import { Link } from "react-router-dom";
import styled from "styled-components";
import { Breakpoints, maxWidthQuery, Colors } from "../../../Utils/cssMedia";

type ImgProps = {
    backgroundImg?: string;
};

export const ProductDetailContainer = styled.div`
    height: auto;  
    margin: auto;
    max-width: 75%;
    margin-top: 1%;
    border-radius: 1%;
    background-color: ${Colors.gray};
    padding: 3rem;
  
    ${maxWidthQuery(Breakpoints.small)} {
        position: relative;
        left: 10%;
        max-width: 70%;
        height: 90vh;
    }
`;

export const DetailsContainer = styled.div`
    width: 100%;
    padding: 30px;
`;

export const TitleContainer = styled.div`
    height: 20%;
    width: 50%;
    font-family:    Arial, Helvetica, sans-serif;
    font-weight:    bold;
     ${maxWidthQuery(Breakpoints.small)} {
        height: 10%;
        width: 100%;
  }
`;

export const BackButton = styled(Link)`
    color: ${Colors.brightRed};
    font-size: 1vw;
    float: left;
    margin: 3%;
    border-radius: 50%;
    transition: 0.2s;
     &:hover {
        color: ${Colors.black};
        transition: 0.2s;
    }
    ${maxWidthQuery(Breakpoints.small)} {
         font-size: 7vw;
    }
`;
export const CategoryContainer = styled.div`
    height: 50%;
    margin: 2%;
    position: relative;
    left: 8%;
    top: 20%;
    font-size: 1.5vw;
    color: ${Colors.black};
    ${maxWidthQuery(Breakpoints.small)} {
         float: left;
         font-size: 1em;
    }
`;

export const NameContainer = styled.div`
    color: ${Colors.brightRed};
    position: relative;
    left: 13%;
    font-size: 2.5vw;
    margin: 2%;
    ${maxWidthQuery(Breakpoints.small)} {
         float: left;
         font-size: 1.5em;
         top: 10%;
    }
`;

export const ImageContainer = styled.div`
    width: 50%
    ${maxWidthQuery(Breakpoints.small)} {
         width: 100%
    }
`;
export const Image = styled.div<ImgProps>`
  width: 35vw;
  height: 20vw;
  position: relative;
  left: 2%;
  top: 10px;
  border-radius: 3%;
  background-image: url(${(props) => props.backgroundImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  transition: 0.2s;
  ${maxWidthQuery(Breakpoints.small)} {
         width: 96%;
         height: 40vw;
         top:10%;
    }

`;
export const DescriptionContainer = styled.div`
    position: relative;
    gap: 10px;
    font-size: 1.5rem;
    text-align: center;
    ${maxWidthQuery(Breakpoints.small)} {
         gap: 10px;
    }
`;
export const PriceContainer = styled.div`
    margin-top: 50px;
    padding: 20px;
    font-size: 1.5rem;
    background-color: ${Colors.openGray};
    text-align: center;
    transition: 0.2s;
  
    &:hover {
        transform: scale(1.05);
        transition: 0.2s;
    }
  
    ${maxWidthQuery(Breakpoints.small)} {
         font-size: 10px;
    }
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