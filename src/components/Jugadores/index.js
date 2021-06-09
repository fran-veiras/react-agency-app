import React from 'react'
import { Footer } from './footer/Footer'
import { JugadoresComponent } from './JugadoresComponent'
import {Container, TituloJugadores, Background} from './Styles'

export const Jugadores = () => {
    return (
        <Background>
            <Container id="jugadores">
                <TituloJugadores className="animate__animated animate__jello animate__delay-2s">JUGADORES</TituloJugadores>
                <JugadoresComponent />
            </Container>
            <Footer/>
        </Background>
    )
}
