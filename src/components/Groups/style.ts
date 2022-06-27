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
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;

    overflow-y: auto;
    overflow-x: hidden;

    max-height: 1465px;
`;
