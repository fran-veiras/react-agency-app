import styled from 'styled-components';
import estadio from '../../img/estadio.jpg';

export const Foto = styled.img`
    width: 170px;
    text-align: center;
`

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${estadio});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
`

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`

export const Grilla = styled.main`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    -webkit-transition: all ease 0.3s;
    -moz-transition: all ease 0.3s;
    transition: all ease 0.3s;

    @media screen and (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

export const Title = styled.p`
    font-size: 1rem;
`

export const Card = styled.div`
    margin: 20px 5px;
    float: left;
    text-align: center;
`

export const Plantilla = styled.div`
    width: 100vw;
    margin: 0 auto;
    position: relative;
`

export const TituloJugadores = styled.h4`
    text-align: center;
    margin: 4rem 0rem 0rem 0rem;
    text-align: center;
    color: #fff;
    text-shadow: 2px 2px #16c79a;
`

export const Btn = styled.a`
    
`

export const Button = styled.div`
    margin: 1rem auto;
    margin-bottom: 3rem;
    text-align: center;
`

export const Span = styled.div`
    width: 80%;
    height:30px;
    margin: 0 auto;
    -moz-border-radius: 0 50% / 0 100%;
    -webkit-border-radius: 0 50% / 0 100%;
    border-radius: 0 20% / 0 100%;
    background: #f8f1f1;
`

export const Circle = styled.div`
    width: 180px;
    height: 180px;
    margin: 0 auto;
    border-radius: 50%;
    background: #16c79a;
    margin-bottom: 1rem;
    overflow: hidden;
`
