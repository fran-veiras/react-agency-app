import React, {useState} from 'react';
import { Link } from 'react-scroll';
import { 
        Container,
        SideBarContainer,
        Icon,
        CloseIcon,
        OpenIcon,
        SidebarMenu,
        Item
        } 
from './SideComponentStyle';

export const SideBar = () => {

    const [Open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!Open)
    }

    return (
        <Container>
            <Icon>
                <OpenIcon onClick={toggle} Open={Open}/>
            </Icon>
            <SideBarContainer toggle={toggle} Open={Open}>
                <Icon>
                    <CloseIcon onClick={toggle} Open={Open}></CloseIcon>
                </Icon>
                <SidebarMenu>
                <Item><Link activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={50}
                            duration={500}
                            onClick={toggle}
                            >HOME
                        </Link></Item>
                        <Item><Link activeClass="active"
                            to="nuestro"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={50}
                            duration={500}
                            onClick={toggle}
                            >NUESTRO TRABAJO
                        </Link></Item>
                        <Item><Link activeClass="active"
                            to="jugadores"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={50}
                            duration={500}
                            onClick={toggle}
                            >JUGADORES
                        </Link></Item>
                        <Item><Link activeClass="active"
                            to="contacto"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={50}
                            duration={500}
                            onClick={toggle}
                            >CONTACTO
                        </Link></Item>
                </SidebarMenu>
            </SideBarContainer>
        </ Container>
    )
}
