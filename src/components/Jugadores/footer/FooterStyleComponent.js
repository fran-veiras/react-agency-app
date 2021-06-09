import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-bottom: 4rem;
`

export const Main = styled.main`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
`

export const Item = styled.div`
    text-align: center;
`

export const Logo = styled.img`
    width: 120px;
`

export const ItemsLi = styled.li`
    padding: .2rem;
`

export const Text = styled.h4`
    color: #fff;
    font-weight: 300;
    display: inline;
`

export const Icon = styled.img`
    width: 25px;
    margin-right: .5rem;
`