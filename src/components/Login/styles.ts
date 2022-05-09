import styled from "styled-components";
import pxToRemHelper from "../../utils/helpers/px-to-rem-helper";

export const Title = styled.h1`
    margin-bottom: ${pxToRemHelper(40)};
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
`

export const Button = styled.button`
    margin-top: ${pxToRemHelper(40)};
`

export const FlatButton = styled.p`
    margin-top: ${pxToRemHelper(40)};
    text-align: center;

    a {
        font-weight: bold;
        cursor: pointer;
    }
`