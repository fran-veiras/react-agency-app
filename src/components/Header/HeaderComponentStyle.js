import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.div`
    width: 100vw;
    height: 10%;
    display: block;
    background: linear-gradient(111deg, rgba(25,69,107,1) 85%, rgba(22,199,154,1) 85%);
    transition: 0.2s ease-out;
    position: fixed;
    z-index: 9999;

    @media screen and (max-width: 1600px) {
        height: 15%;
    }

    @media screen and (max-width: 800px) {
        display: none;
    }
`

export const Container = styled.div`
    width: 90%;
    height: 100%;
    display: block;
    margin: 0 auto;
`

export const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    overflow: hidden;
`

export const Item = styled.div`
    display: flex;
    color: #fff;
    cursor: pointer;
`

export const BarLink = styled(Link)`
    font-size: 1.1rem;
    font-weight: 500;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;
`

export const Icon = styled.div`
    
`

export const Brand = styled.img`
    width: 140px;
`