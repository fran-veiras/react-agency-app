import React, { useState } from 'react'
import Jugadores from './data';
import {Foto, Grilla, Card, Title, Plantilla, Btn, Button, Span, Circle} from './Styles'

export const JugadoresComponent = () => {

    const [initial, setInitial] = useState(9)

    const [clase, setClase] = useState("button2")

    const toggle = () => {
        setInitial(20)
        setClase("button3")
    }

    return (
        <>
        <Plantilla>
            <Grilla>
                {
                    Jugadores.slice(0, initial).map( img => (
                            <Card>
                                <Circle><Foto src={img.img}></Foto></Circle>
                                <Span><Title>{img.name}</Title></Span>
                            </Card>
                    ))
                }
            </Grilla>
        </Plantilla>
        <Button><Btn onClick={toggle} type="button" className={clase}>VER MÁS JUGADORES +</Btn></Button>
        </>
    )
}
