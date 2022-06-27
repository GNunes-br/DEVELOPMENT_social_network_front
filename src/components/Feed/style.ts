import styled from 'styled-components';
import pxToRemHelper from '../../utils/helpers/px-to-rem-helper';

export const Content = styled.div`
    flex-direction: column;
    justify-content: start;

    min-width: 1215px;
    max-width: 1215px;

    max-height: 1465px;

    background-color: ${props => props.theme.colors.background};

    padding-left: 0;
    padding-right: ${pxToRemHelper(15)};
    padding-top: ${pxToRemHelper(15)};
    padding-bottom: ${pxToRemHelper(15)};
`;

export const Body = styled.div`
    flex-direction: column;
    align-items: center;

    overflow-y: auto;
    overflow-x: hidden;

    .empty-feed {
        justify-content: center;

        width: 80vw;

        p {
            text-align: center;
        }
    }

    .floating-button {
        button {
            display: flex;
            justify-content: center;
            align-items: center;

            position: fixed;

            width: 50px;
            height: 50px;

            bottom: 40px;
            right: 40px;

            background-color: ${props => props.theme.colors.primary};

            border-radius: 50%;
            border: 1px solid #ffffff;

            box-shadow: 1px 1px 2px #888;

            z-index: 1000;

            transition: transform 0.3s;

            :hover {
                transform: scale(1.2, 1.2);
            }

            svg {
                fill: #ffffff;

                height: 40px;
                width: 40px;

                transition: transform 0.3s ease-in-out;

                :hover {
                    transform: rotate(90deg);
                }
            }
        }
    }
`;
