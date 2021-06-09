import React from 'react'
import {Container, Brand, Text, Btn, Encbezado} from './TitleComponentStyle';
import { Link } from 'react-scroll';

export const Title = () => {
    return (
        <Container>
            <Encbezado>
                <Brand>FUTBOL AGENCY</Brand>
                <Text className="animate__animated animate__backInDown">Con pasión nos dedicamos a representar futbolistas. Somos una gran familia.</Text>
                <Btn type="button" className="button1"><Link 
                to="nuestro"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-80}
                duration={500}
                >Conocenos más</Link></Btn>
            </Encbezado>
        </Container>
    )
}
