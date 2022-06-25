import styled from "styled-components";
import pxToRemHelper from "../../utils/helpers/px-to-rem-helper";

export const Content = styled.div`
    flex-direction: column;

    background-color: ${props => props.theme.colors.secondary_background};

    border-radius: ${pxToRemHelper(10)};

    margin-bottom: ${pxToRemHelper(15)};
`

export const Header = styled.div`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    min-height: 40px;
    max-height: 50px;

    background-color: ${props => props.theme.colors.primary};

    border-radius: ${pxToRemHelper(10)} ${pxToRemHelper(10)} 0px 0px;

    .group-info {
        flex-direction: row;
        align-items: center;

        margin-left: ${pxToRemHelper(15)};

        p {
            margin-left: ${pxToRemHelper(10)};

            color: ${props => props.theme.colors.background};
            font-size: ${pxToRemHelper(13)};
            font-weight: 100;

            a {
                color: ${props => props.theme.colors.background};
                text-decoration: none;
                font-size: ${pxToRemHelper(14)};
                font-weight: 500;
            }
        }
    }

    .date-and-time {

        margin-right: ${pxToRemHelper(15)};

        color: ${props => props.theme.colors.background};
        font-size: ${pxToRemHelper(13)};
        text-align: center;
    }
`

export const Body = styled.div`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    padding: ${pxToRemHelper(15)};
    
    .publication-content {
        
        max-height: 200px;
        overflow: auto;

        font-size: ${pxToRemHelper(16)};
    }

    .publication-tags {
        margin-top: ${pxToRemHelper(15)};

        ul {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: start;
                align-items: flex-start;
                
                overflow: auto;
            }

            li {
                display: flex;
                flex-direction: row;
                align-items: center;
                
                background-color: #D4D4D4;
                                
                list-style: none;
                
                font-size: small;
                font-weight: normal;
                text-align: center;
                color: ${props => props.theme.colors.primary};
                
                padding: ${pxToRemHelper(6)};

                margin: ${pxToRemHelper(2)};
                
                border-radius: ${pxToRemHelper(5)};
            }
    }
`

export const Footer = styled.div`
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;

    min-height: 55px;

    background-color: ${props => props.theme.colors.secondary_background};

    border-radius: 0px 0px ${pxToRemHelper(10)} ${pxToRemHelper(10)};

    margin-left: ${pxToRemHelper(15)};

    .like-button {
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