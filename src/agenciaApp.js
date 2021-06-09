import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HeaderComponent } from './components/Header/index';
import { Jugadores } from './components/Jugadores/index';
import { PortadaComponent } from './components/Portada/index';
import { SliderData } from './components/Portada/PortadaComponentStyle';
import { Redes } from './components/Redes/index';
import { SideBar } from './components/SideBar';
import { GlobalStyle } from './GlobalStyles';

export const AgenciaApp = () => {
    return (
        <Router>
            <GlobalStyle />
            <HeaderComponent />
            <PortadaComponent slides={SliderData}/>
            <SideBar />
            <Redes />
            <Jugadores />
        </ Router>
    )
}
