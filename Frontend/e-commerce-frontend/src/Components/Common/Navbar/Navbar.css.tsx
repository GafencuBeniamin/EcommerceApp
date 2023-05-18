import { Link } from "react-router-dom";
import styled from "styled-components"
import { Colors } from "../../../Utils/cssMedia";


export const NavbarContainer = styled.div`
    width: 100%;
    height: 150px;
    background: ${Colors.gray};
    border-bottom: 1px solid #555;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.div`
    margin-left: 80px; 
    font-size: 70px;
    cursor: pointer;
`
export const LinksContainer = styled.div`
    margin - right: 100px;
    display: flex;
    width: 800px;
    justify - content: space - evenly;
`
export const LinkText = styled(Link)`
    text-decoration: none;
    text-align: center;
    font-size: 30px;
    padding: .5em;
    color:${Colors.black};
    transition: 0.2s;
    border-radius: 50%;
    &:hover {
        text-decoration: none;
        color: ${Colors.brightRed};
        background-color: ${Colors.white};
        scale: 120%;
        transition: 0.2s;
        border-radius: 10%;
    }
`
export const DetailText = styled.div`
    text-decoration: none;
    font-size: 20px;
    padding: .3.5em;
    margin-top:15px;
    text-align: center;
    color:${Colors.black};
    transition: 0.2s;
`
export const Menubar = styled.div`
    align: center
`
