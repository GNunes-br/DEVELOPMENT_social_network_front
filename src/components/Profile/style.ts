import styled from 'styled-components';
import pxToRemHelper from '../../utils/helpers/px-to-rem-helper';

export const Content = styled.div`
    flex-direction: column;
    justify-content: start;

    min-width: 1215px;
    max-width: 1450px;

    max-height: 1465px;

    background-color: ${props => props.theme.colors.background};

    padding-left: 0;
    padding-right: ${pxToRemHelper(15)};
    padding-top: ${pxToRemHelper(15)};
    padding-bottom: ${pxToRemHelper(15)};
`;

export const Body = styled.div`
    flex-direction: column;
    align-items: flex-start;

    .profile {
        flex-direction: row;
        align-items: flex-end;

        width: 100%;

        background-color: ${props => props.theme.colors.primary};

        padding: 40px;

        border-radius: 10px;

        img {
            height: 150px;
            width: 150px;
        }

        h1 {
            margin-left: 20px;

            color: #ffffff;
        }
    }

    .profile-details {
        flex-direction: row;

        margin-top: 15px;

        width: 100%;

        background-color: ${props => props.theme.colors.secondary_background};

        padding: 40px;

        border-radius: 10px;

        table {
            th tr {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: start;

                width: 80px;
                height: 35px;

                border-right: 1px solid #9a9a9a;
            }

            td tr {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: start;

                font-weight: normal;

                min-width: 300px;
                max-width: 550px;

                height: 35px;

                margin-left: 15px;
            }
        }
    }
`;
