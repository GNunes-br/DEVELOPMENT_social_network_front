import styled from "styled-components";
import pxToRemHelper from "../../../utils/helpers/px-to-rem-helper";

export const Publication = styled.div`
    display: flex;
    flex-direction: column;
    width: 60vw;
    height: auto;
    background-color: ${props => props.theme.colors.secondary_background};
    margin-top: ${pxToRemHelper(7.5)};
    margin-bottom: ${pxToRemHelper(7.5)};
    border-radius: ${pxToRemHelper(10)};
`
export const PublicationHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 60vw;
    height: 6vh;
    padding-left: ${pxToRemHelper(20)};
    padding-right: ${pxToRemHelper(20)};
    background-color: ${props => props.theme.colors.primary};
    border-radius: ${pxToRemHelper(10)} ${pxToRemHelper(10)} 0px 0px;

    .profile-info {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        img {
            width: ${pxToRemHelper(20)};
            height: ${pxToRemHelper(20)};
        }

        p {
            margin-left: ${pxToRemHelper(10)};
            color: ${props => props.theme.colors.primary_background};
            font-size: small;
        }

        a {
            text-decoration: none;
        }
    }

    .date-and-time {
        margin-left: ${pxToRemHelper(10)};
        color: ${props => props.theme.colors.primary_background};
        font-size: small;
    }
`

export const PublicationBody = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 60vw;
    height: auto;
    max-height: 30vh;
    overflow: auto;
    padding-left: ${pxToRemHelper(20)}; 
    padding-right: ${pxToRemHelper(20)}; 
    margin-top: ${pxToRemHelper(20)}; 
    margin-bottom: ${pxToRemHelper(10)}; 
    
    .publication-content {
        max-height: 30vh;
        font-size: ${pxToRemHelper(15)};
    }
`

export const PublicationFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 60vw;
    height: 9vh;
    padding-left: ${pxToRemHelper(20)};
    padding-right: ${pxToRemHelper(20)};
    background-color: ${props => props.theme.colors.secondary_background};
    border-radius: 0px 0px ${pxToRemHelper(10)} ${pxToRemHelper(10)};

    .like-button {
        display: flex;
        flex-direction: column;
        align-items: center;

        .like-image {
        width: ${pxToRemHelper(25)};
        height: ${pxToRemHelper(25)};
        cursor: pointer;
        }

        .like-count {
            font-size: small;
            text-align: center;
            color: #f9595f
        }
    }
`