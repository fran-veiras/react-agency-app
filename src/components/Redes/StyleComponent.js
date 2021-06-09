import styled from 'styled-components';

export const Icon1 = styled.img`
    display: block;
    margin: 0 auto;
`

export const Icon2 = styled.img`
    display: block;
    margin: 0 auto;   
`

export const Icon3 = styled.img`
    display: block;
    margin: 0 auto;
`

export const Container = styled.div`
    width: 100vw;
    background: #fff;
    margin-bottom: 4rem;
    margin-top: 4rem;
`

export const Section = styled.div`
    width: 80%;
    margin: 0 auto;
`

export const Title = styled.h4`
    text-align: center;
    margin: 1rem auto;
    color: #000;
`

export const Text = styled.p`
    text-align: center;
    margin-bottom: 2rem;
`

export const Main = styled.main`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
    }
`

export const Item1 = styled.div`

`

export const Item2 = styled.div`

`

export const Item3 = styled.div`

`

