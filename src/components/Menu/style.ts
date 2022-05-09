import styled from "styled-components";
import pxToRemHelper from "../../utils/helpers/px-to-rem-helper";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 20vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.primary_background};
`

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.secondary_background};
`

export const UserNameAndImage = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: ${pxToRemHelper(15)};
    margin-bottom: ${pxToRemHelper(15)};

    img {
        height: ${pxToRemHelper(40)};
        width: ${pxToRemHelper(40)};
    }

    h1 {
        margin-left: ${pxToRemHelper(10)};
        font-size: ${pxToRemHelper(25)};
        white-space: nowrap;
        overflow: hidden;
        max-width: 13vw;
        text-overflow: ellipsis;
    }
`

export const Line = styled.hr`
    border: ${pxToRemHelper(1)} solid #DBDBDB;
    background-color: #DBDBDB;
    width: 5vw;
    border-radius: ${pxToRemHelper(10)};
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    max-height: 50vh;
    overflow: auto;
    margin-top: ${pxToRemHelper(15)};

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    
    li {
        display: flex;
        align-items: center;
        padding-top: ${pxToRemHelper(10)};
        padding-bottom: ${pxToRemHelper(10)};
        padding-left: ${pxToRemHelper(10)};
        width: 17vw;
        font-weight: normal;
        cursor: pointer;
        transition: 95%;

        :hover {
            background-color: #DBDBDB;
            border-radius: ${pxToRemHelper(10)};
        }
    }

    img {
        margin-right: ${pxToRemHelper(10)};
        height: ${pxToRemHelper(20)};
        width: ${pxToRemHelper(20)};
    }
`