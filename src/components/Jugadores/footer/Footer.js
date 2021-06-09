import React from 'react';
import {Container, Main, Item, Logo, ItemsLi, Text, Icon} from './FooterStyleComponent';
import logo from '../../../img/BRAND.png'
import insta from '../../../img/media/instagram.png'
import face from '../../../img/media/facebook.png'
import wpp from '../../../img/media/whatsapp.png'

export const Footer = () => {
    return (
        <Container id="contacto">
            <Main>
               <Item>
                   <Logo src={logo}/>
               </Item> 
               <Item>
                   <ul>
                       <ItemsLi><Icon src={insta}/><Text>fut.agency</Text></ItemsLi>
                       <ItemsLi><Icon src={face}/><Text>FutbolAgency</Text></ItemsLi>
                       <ItemsLi><Icon src={wpp}/><Text>+54 112067899</Text></ItemsLi>
                   </ul>
               </Item> 
               <Item>
                    <ul>
                       <ItemsLi><Text>fut.agency@gmail.com</Text></ItemsLi>
                   </ul>
               </Item> 
            </Main>
        </Container>
    )
}
