import styled from "styled-components";
import pxToRemHelper from "../../utils/helpers/px-to-rem-helper";

export const Content = styled.div`
    flex-direction: column;
    
    height: 100vh;
    width: 13vw;

    min-width: 250px;
    max-width: 250px;

    padding: ${pxToRemHelper(15)};
`

export const Header = styled.div`
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.colors.secondary_background};

    border-radius: ${pxToRemHelper(10)};

    max-height: 70px;
    min-height: 70px;

    .profile-info {

        flex-direction: row;
        align-items: center;

        img {
            height: ${pxToRemHelper(45)};
            width: ${pxToRemHelper(45)};
        }

        h1 {
            margin-left: ${pxToRemHelper(10)};

            font-size: ${pxToRemHelper(20)};
            
            max-width: 130px;
            
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`

export const Body = styled.div`
    flex-direction: column;

    background-color: ${props => props.theme.colors.secondary_background};

    border-radius: ${pxToRemHelper(10)};

    margin-top: ${pxToRemHelper(15)};

    max-height: 700px;

    padding-bottom: ${pxToRemHelper(15)};

    overflow: auto;

    .menu-items {   
        
        ul {
            width: 100%;
        }
        
        li {
            display: flex;
            align-items: center;
            
            margin-top: ${pxToRemHelper(15)};
            
            span {
                margin-left: ${pxToRemHelper(10)};
                
                font-weight: 400;
                font-size: ${pxToRemHelper(16)};
                color: #9A9A9A;
            }
            
            svg {
                
                height: ${pxToRemHelper(25)};
                width: ${pxToRemHelper(25)};
                
                fill: #9A9A9A;
                
                margin-left: ${pxToRemHelper(15)};
            }

            :hover {

                border-left: 3px solid ${props => props.theme.colors.text};

                cursor: pointer;
                
                span {
                    color: ${props => props.theme.colors.text};
                }

                svg {
                    fill: ${props => props.theme.colors.text};
                }
            }
        }
    }
`

export const Footer = styled.div`
    margin-top: ${pxToRemHelper(15)};

    button {
        background-color: #EE342F;

        width: 220px;

        font-size: ${pxToRemHelper(16)};

        :hover {
            background-color: #C7302C;
        }
    }
`