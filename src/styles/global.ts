import { createGlobalStyle } from "styled-components";
import pxToRemHelper from "../utils/helpers/px-to-rem-helper";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    * {
        scrollbar-width: thin;
        scrollbar-color: #DBDBDB transparent;
    }

    *::-webkit-scrollbar {
        width: ${pxToRemHelper(4)};
    }

    *::-webkit-scrollbar-track {
        background: transparent;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #DBDBDB;
        border-radius: ${pxToRemHelper(10)};
    }

    div {
        display: flex;
    }

    body {
        background: ${ props => props.theme.colors.background };
        color: ${ props => props.theme.colors.text };
        font: 700 ${pxToRemHelper(16)} Roboto, sans-serif;
    }

    h1 {
        font-size: ${pxToRemHelper(50)};
        font-weight: 700;
        color: ${ props => props.theme.colors.text };
    }

    p {
        font-size: ${pxToRemHelper(18)};
        font-weight: 400;
        color: ${ props => props.theme.colors.text };
    }

    button {
        font-family: Roboto, sans-serif;
        font-size: ${pxToRemHelper(14)};
        text-align: center;
        color: ${ props => props.theme.colors.background };
        
        background-color: ${ props => props.theme.colors.primary };
        
        border: none;
        border-radius: ${pxToRemHelper(10)};
        
        width: ${pxToRemHelper(275)};
        height: ${pxToRemHelper(45)};
        
        cursor: pointer;
    }

    input {
        text-align: center;
        background-color: ${ props => props.theme.colors.secondary_background };
        border: none;
        border-radius: ${pxToRemHelper(10)};
        width: ${pxToRemHelper(275)};
        height: ${pxToRemHelper(45)};
        margin-top: ${pxToRemHelper(7.5)};
        margin-bottom: ${pxToRemHelper(7.5)};
        padding: ${pxToRemHelper(5)};

        ::placeholder {
            font-family: Roboto, sans-serif;
            font-size: ${pxToRemHelper(14)};
            color: ${ props => props.theme.colors.primary };
        }

        :focus {
            outline: none;
            border: ${pxToRemHelper(2)} solid ${ props => props.theme.colors.primary };
        }
    }
`