import styled from "styled-components";
import pxToRemHelper from "../../utils/helpers/px-to-rem-helper";

export const Content = styled.div`
    flex-direction: column;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;

    background-color: ${ props => props.theme.colors.background };
    border-radius: ${pxToRemHelper(15)};

    min-height: 440px;
    max-height: 500px;

    min-width: 820px;
    max-width: 920px;
    
    transform: translate(-50%, -50%);
`

export const Header = styled.div`
    flex-direction: row;
    align-items: center;

    background-color: ${ props => props.theme.colors.primary };

    min-height: 40px;
    max-height: 50px;

    width: 100%;

    border-radius: ${pxToRemHelper(10)} ${pxToRemHelper(10)} 0px 0px;

    img {
        height: ${pxToRemHelper(60)};
        width: ${pxToRemHelper(60)};

        margin-left: ${pxToRemHelper(15)};
    }

    .header-title {
        justify-content: space-around;

        flex-direction: column;
        align-items: flex-start;
        margin-left: ${pxToRemHelper(10)};

        h1 {
            font-size: x-large;
    
            color: #FFFF;
        }
    
        p {
            font-size: small;

            color: #D3D3D3
        }
    }

`

export const Body = styled.div`
    .publication-content {

        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        background-color: ${ props => props.theme.colors.background };
        
        min-height: 330px;
        max-height: 400px;

        width: 100%;

        textarea {

            min-height: 250px;
            max-height: 320px;

            width: 98%;

            background-color: ${ props => props.theme.colors.secondary_background };

            border: none;
            border-radius: ${pxToRemHelper(10)};

            padding: ${pxToRemHelper(15)};

            resize: none;
        
            font-size: medium;
            color: ${props => props.theme.colors.text};

            :focus {
                outline: none;
            }
        }

        .tags-area {
            flex-direction: row;

            min-height: 60px;
            max-height: 70px;

            width: 98%;

            padding: ${pxToRemHelper(5)};

            border-radius: ${pxToRemHelper(10)};
            border: ${pxToRemHelper(1)} dashed ${props => props.theme.colors.primary};


            .empty-tags {
                display: flex;
                justify-content: center;
                align-items: center;

                width: 59vw;

                p {
                    font-size: small;
                    text-align: center;
                    max-width: 25vw;
                }
            }

            
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
                
                width: auto;
                
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
    }
`
export const Footer = styled.div`
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;

    min-height: 40px;
    max-height: 50px;

    width: 100%;

    border-radius: 0px 0px ${pxToRemHelper(10)} ${pxToRemHelper(10)};

    background-color: ${ props => props.theme.colors.background };

    button {
        width: 10vw;

        margin-right: ${pxToRemHelper(8)};

        transition-duration: 0.4s;

    }
    
    .cancel-button {
        background-color: #D3D3D3;

        color: #2A2A2A;
    }

    .disabled {
        pointer-events: none;
        cursor: none;

        background-color: #D3D3D3;

        color: #808080;
    }
`