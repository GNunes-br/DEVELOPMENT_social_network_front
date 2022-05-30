import styled from "styled-components";
import pxToRemHelper from "../../utils/helpers/px-to-rem-helper";

export const Feed = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 87vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.background};
`
export const Publications = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 87vw;
    margin-top: ${pxToRemHelper(15)};
    margin-bottom: ${pxToRemHelper(15)};
    overflow: auto;
`

export const FloatingButton = styled.div`
    display: flex;
    justify-content: flex-end;
    
    button {
        display: flex;
        position:fixed;
        justify-content: center;
        align-items: center;
        width: ${pxToRemHelper(60)};
        height: ${pxToRemHelper(60)};
        bottom: ${pxToRemHelper(40)};
        right: ${pxToRemHelper(40)};
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.background};
        border-radius: 50%;
        text-align: center;
        font-size: ${pxToRemHelper(30)};
        box-shadow: 1px 1px 2px #888;
        z-index:1000;
    }
    
    img {
        width: ${pxToRemHelper(30)};
        height: ${pxToRemHelper(30)};
    }
`