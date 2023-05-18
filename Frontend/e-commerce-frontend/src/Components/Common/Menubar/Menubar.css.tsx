import { Link } from "react-router-dom";
import styled from "styled-components"
import { Colors } from "../../../Utils/cssMedia";


export const MenubarContainer = styled.div`
    margin-top:20px;
    height: 100px;
    margin-left: 100px;
    margin-right: 100px;
    background: ${Colors.white};
    display: flex;
    align-items: center;
    justify-content: space-between;
`
//aici poate fi link pe viitor
export const MenuItemLinks = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    font-size: 30px;
    text-decoration: none;
    border-radius: 5px;
    color: ${Colors.white};
    background-color: ${Colors.darkBlue};};
    transition: 0.2s;
    width: 100%;
  
    &:hover {
        background-color: ${Colors.brightRed};
        color: ${Colors.white};
        width: 100%;
        transition: 0.2s;
    }
`;
export const SpecialMenuItem = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    font-size: 30px;
    text-decoration: none;
    border-radius: 5px;
    color: ${Colors.white};
    background-color: ${Colors.black};};
    transition: 0.2s;
    width: 100%;
  
    &:hover {
        background-color: ${Colors.brightRed};
        color: ${Colors.white};
        width: 100%;
        transition: 0.2s;
    }
`;
