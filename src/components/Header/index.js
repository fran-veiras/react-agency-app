import React from 'react'
import { Link } from 'react-scroll';
import {
    Header,
    Container,
    MenuContainer,
    Item,
    BarLink,
    Brand
} 
from './HeaderComponentStyle';
import imgBrand from '../../img/BRAND.png'

export const HeaderComponent = () => {
    return (
        <>
            <Header>
                <Container>
                    <MenuContainer>
                        <Brand src={imgBrand}></Brand>
                        <Item><BarLink to="/"></BarLink></Item>
                        <Item><Link activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={0}
                            duration={500}>HOME
                        </Link></Item>
                        <Item><Link activeClass="active"
                            to="nuestro"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={50}
                            duration={500}>NUESTRO TRABAJO
                        </Link></Item>
                        <Item><Link activeClass="active"
                            to="jugadores"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-30}
                            duration={500}>JUGADORES
                        </Link></Item>
                        <Item><Link activeClass="active"
                            to="contacto"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={50}
                            duration={500}>CONTACTO
                        </Link></Item>
                    </MenuContainer>
                </Container>
            </Header>
        </>
    )
}
