import styled from 'styled-components';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import img2 from '../../img/jugador2.jpg'
import img3 from '../../img/jugador3.jpg'
import img4 from '../../img/jugador4.jpg'
import img5 from '../../img/jugador5.jpg'

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 80vh;
    display: block;
    text-align: center;
    overflow-y: hidden;

    @media screen and (max-width: 1600px) {
        height: 100vh;
    }

    @media screen and (max-width: 800px) {
        height: 80vh;
    }
`

export const Imagenes = styled.img`
    width: 100vw;
    text-align: center;

    @media screen and (max-width: 800px) {
        width: 1000px;
        
    }
`

export const ArrowRight = styled(AiOutlineArrowRight)`
    position: absolute;
    top: 50%;
    right: 2%;
    font-size: 3rem;
    color: #fff;
    z-index: 12;
    cursor: pointer;
    user-select: none;
`

export const ArrowLeft = styled(AiOutlineArrowLeft)`
    position: absolute;
    top: 50%;
    left: 2%;
    font-size: 3rem;
    color: #fff;
    z-index: 12;
    cursor: pointer;
    user-select: none;
`

export const SliderData = [
    {
        image: img2
    },
    {
        image: img3
    },
    {
        image: img4
    },
    {
        image: img5
    },
]