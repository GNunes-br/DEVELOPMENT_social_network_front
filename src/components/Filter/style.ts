import styled from "styled-components";
import pxToRemHelper from "../../utils/helpers/px-to-rem-helper";

export const Filter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 10vh;
    background-color: ${props => props.theme.colors.secondary_background};
`

export const SearchBox = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;

    input {
        background-color: ${props => props.theme.colors.primary_background};
        height: ${pxToRemHelper(50)};
        color: ${props => props.theme.colors.primary};
        width: 60vw;
        height: 7vh;
        text-align: start;
        font-size: ${pxToRemHelper(14)};
        padding-left: ${pxToRemHelper(15)};
        padding-right: ${pxToRemHelper(15)};
        border-radius: ${pxToRemHelper(10)} 0px 0px ${pxToRemHelper(10)};

        :focus {
            outline: none;
            border: ${pxToRemHelper(2)} solid ${ props => props.theme.colors.primary };
        }

        ::placeholder {
            text-align: center;
        }
    }

    button {
        width: 5vw;
        height: 7vh;
        background-color: ${props => props.theme.colors.primary_background};
        border-radius: 0px ${pxToRemHelper(10)} ${pxToRemHelper(10)} 0px;

        :hover {
            background-color: #DBDBDB;
        }
    }

    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: fill;
        width: ${pxToRemHelper(20)};
        height: ${pxToRemHelper(20)};
    }
`