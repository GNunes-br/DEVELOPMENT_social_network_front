import styled from 'styled-components';

export const Content = styled.div`
    flex-direction: column;
    justify-content: start;

    width: 240px;

    max-height: 270px;

    background-color: ${props => props.theme.colors.secondary_background};

    margin-bottom: 10px;
    margin-right: 10px;

    border-radius: 10px;
`;

export const Header = styled.div`
    flex-direction: row;
    justify-content: center;
    align-items: center;

    min-height: 50px;

    margin-top: 10px;

    width: 100%;

    h1 {
        font-size: x-large;

        color: ${props => props.theme.colors.text};

        max-width: 80%;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const Body = styled.div`
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 240px;

    padding: 15px;

    overflow: auto;

    p {
        min-height: 110px;
        max-height: 140px;

        font-size: medium;
        text-align: center;
    }
`;

export const Footer = styled.div`
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 70px;
    width: 240px;

    button {
        width: 150px;
        height: 35px;

        margin-top: 15px;
        margin-bottom: 15px;

        :disabled {
            pointer-events: none;
            cursor: none;

            background-color: #d3d3d3;

            color: #808080;
        }
    }
`;
