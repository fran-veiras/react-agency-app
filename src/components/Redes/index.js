import React from 'react';
import juridico from '../../img/juridico.png';
import negociaciones from '../../img/negociaciones.png';
import repre from '../../img/repre.png';
import {Container,
        Title,
        Text,
        Section,
        Main,
        Item1, Item2, Item3,
        Icon1, Icon2, Icon3
    } from './StyleComponent';

export const Redes = () => {
    return (
        <Container id="nuestro">
            <Section>
                <Title>AGENCIA DE REPRESENTACIÓN E INTERMEDIACIÓN DE FUTBOLISTAS</Title>
                <Text>
                    Futbol Agency Group es una agencia de representacion, intermediación, asesoría y promoción de futbolistas, con más de 15 años en el mercado.
                    <br />
                    <br />
                    Ofrecemos una amplia gama de servicios y prácticas de consultoría relacionada con el mundo del fútbol cuyo propósito se fundamenta en la búsqueda, análisis, profundización y concreción de oportunidades de negocio en el ámbito deportivo.
                    <br />
                    <br />
                    Para ello contamos con un equipo de especialistas y profesionales con una dilatada experiencia en negociaciones deportivas a nivel internacional, así como con la colaboración de agentes e intermediarios más destacados en el mundo del fútbol.
                    <br />
                    <br />
                </Text>
                <Main>
                    <Item2>
                        <Icon2 src={repre}></Icon2>
                        <Title>REPRESENTACIÓN DEPORTIVA</Title>
                        <Text>La representación es imprescindible, para darle la seguridad, estabilidad y satisfacción en su trayectoria profesional.</Text>
                    </Item2>
                    <Item1>
                        <Icon1 src={negociaciones}></Icon1>
                        <Title>MEDIACIÓN</Title>
                        <Text>A través de las relaciones y recursos humanos que hemos desarrollado durante años, podemos ofrecer las mediaciones y negociaciones necesarias con jugadores, clubes y asociaciones.</Text>
                    </Item1>
                    <Item3>
                        <Icon3 src={juridico}></Icon3>
                        <Title>ASESORÍA JURÍDICA</Title>
                        <Text>Contamos con el equipo y relaciones idóneas que garantizan la asesoría jurídica adecuada para los profesionales del futbol.</Text>
                    </Item3>
                </Main>
            </Section>
        </Container>
    )
}
