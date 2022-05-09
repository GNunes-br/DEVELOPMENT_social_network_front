import styled from "styled-components";

export const Intro = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Image = styled.div`
    height: 100vh;
    width: 0vw;
    background: none;

    @media only screen and (min-width: 768px) {
        width: 50vw;
        background-image: url('intro.jpg');
        background-repeat: no-repeat;
        background-position: inherit;
        background-size: cover;
    }
`

export const Form = styled.div`
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: 768px) {
        display: flex;
        width: 50vw;
        align-items: center;
    }
`