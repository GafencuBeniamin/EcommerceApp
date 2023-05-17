import { Link } from "react-router-dom";
import styled from "styled-components"
import { Colors } from "../../../Utils/cssMedia";


export const NavbarContainer = styled.div`
    width: 100%;
    height: 200px;
    background: ${Colors.gray};
    border-bottom: 1px solid #555;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.div`
    margin-left: 80px; 
    font-size: 100px;
    cursor: pointer;
`
export const LinksContainer = styled.div`
    margin - right: 50px;
    display: flex;
    width: 400px;
    justify - content: space - evenly;
`
export const LinkText = styled(Link)`
    text-decoration: none;
    font-size: 30px;
    padding: .4em;
    color:${Colors.black};
    transition: 0.2s;
    &:hover {
        text-decoration: none;
        color: ${Colors.darkRed};
        scale: 120%;
        transition: 0.2s;
    }
`
export const Menubar = styled.div`
    align: center
`
