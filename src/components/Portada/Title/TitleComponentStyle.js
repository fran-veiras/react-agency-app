import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    position: absolute;
    top: 40%;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        top: 20%
    }
`

export const Brand = styled.h1`
    text-align: center;
    margin: 0rem 1.2rem 1.2rem 1.2rem;
    color: #fff;
    box-shadow: 0px 4px white;
    display: inline-block;

    &::selection {
        background: #16c79a;
        color: #f8f1f1;
    }
`

export const Encbezado = styled.div`
    width: 80%;

    @media screen and (max-width: 800px) {
        width: 95%;
    }
`

export const Text = styled.h3`
    text-align: center;
    color: #fff;
    text-shadow: 2px 2px black;

    @media screen and (max-width: 800px) {
        font-size: 2rem;
    }

    &::selection {
        background: #16c79a;
        color: #f8f1f1;
    }
`

export const Btn = styled.a`
    text-align: center;

    &::selection {
        background: #16c79a;
        color: #f8f1f1;
    }
`

