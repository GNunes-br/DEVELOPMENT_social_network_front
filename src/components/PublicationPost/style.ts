import styled from 'styled-components';
import pxToRemHelper from '../../utils/helpers/px-to-rem-helper';

export const Content = styled.div`
    flex-direction: column;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;

    background-color: ${props => props.theme.colors.background};
    border-radius: ${pxToRemHelper(15)};

    min-height: 440px;
    max-height: 500px;

    min-width: 820px;
    max-width: 920px;

    transform: translate(-50%, -50%);
`;

export const Header = styled.div`
    flex-direction: row;
    align-items: center;

    background-color: ${props => props.theme.colors.primary};

    min-height: 60px;
    max-height: 80px;

    width: 100%;

    border-radius: ${pxToRemHelper(10)} ${pxToRemHelper(10)} 0px 0px;

    img {
        height: ${pxToRemHelper(40)};
        width: ${pxToRemHelper(40)};

        margin-left: ${pxToRemHelper(15)};
    }

    .header-title {
        justify-content: space-around;

        flex-direction: column;
        align-items: flex-start;
        margin-left: ${pxToRemHelper(10)};

        h1 {
            font-size: x-large;

            color: #ffff;
        }

        p {
            font-size: small;

            color: #d3d3d3;
        }
    }
`;

export const Body = styled.div`
    .publication-content {
        min-height: 380px;
        max-height: 380px;

        min-width: 850px;
        max-width: 850px;

        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        background-color: ${props => props.theme.colors.background};

        textarea {
            min-height: 280px;
            max-height: 320px;

            min-width: 820px;
            max-width: 920px;

            width: 98%;

            background-color: ${props =>
                props.theme.colors.secondary_background};

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

            min-height: 70px;
            max-height: 70px;

            min-width: 820px;
            max-width: 920px;

            width: 98%;

            padding: ${pxToRemHelper(5)};

            border-radius: ${pxToRemHelper(10)};
            border: ${pxToRemHelper(1)} dashed
                ${props => props.theme.colors.primary};

            .empty-tags {
                display: flex;
                justify-content: center;
                align-items: center;

                min-height: 50px;
                max-height: 60px;

                min-width: 820px;
                max-width: 920px;

                width: 98%;

                overflow: auto;

                p {
                    font-size: small;
                    text-align: center;
                    max-width: 430px;
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

                background-color: #d4d4d4;

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

    .groups-selection-content {
        min-height: 380px;
        max-height: 380px;

        min-width: 850px;
        max-width: 850px;

        flex-direction: column;

        padding: ${pxToRemHelper(15)};

        .selection-description {
            margin: ${pxToRemHelper(5)};
        }

        .selection-area {
            flex-direction: row;
            align-items: start;
            justify-content: start;
            flex-wrap: wrap;

            overflow: auto;

            .group-card {
                flex-direction: row;
                justify-content: center;
                align-items: center;

                background-color: ${props =>
                    props.theme.colors.secondary_background};

                min-width: 100px;
                max-width: 220px;

                height: 50px;

                margin: ${pxToRemHelper(10)};

                padding: ${pxToRemHelper(10)};

                border-radius: ${pxToRemHelper(6)};

                cursor: pointer;

                p {
                    max-width: 220px;

                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }

            .selected {
                background-color: ${props => props.theme.colors.primary};

                p {
                    color: #ffffff;
                }
            }
        }

        animation: transitionIn 0.75s;

        @keyframes transitionIn {
            from {
                opacity: 0;
                transform: rotateX(-10deg);
            }

            to {
                opacity: 1;
                transform: rotateX(0);
            }
        }
    }
`;
export const Footer = styled.div`
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;

    min-height: 55px;
    max-height: 70px;

    min-width: 820px;
    max-width: 920px;

    width: 100%;

    border-radius: 0px 0px ${pxToRemHelper(10)} ${pxToRemHelper(10)};

    background-color: ${props => props.theme.colors.background};

    button {
        min-width: 170px;
        max-width: 200px;

        margin-right: ${pxToRemHelper(8)};
    }

    .cancel-button {
        background-color: #d3d3d3;

        color: #2a2a2a;
    }

    .disabled {
        pointer-events: none;
        cursor: none;

        background-color: #d3d3d3;

        color: #808080;
    }
`;
