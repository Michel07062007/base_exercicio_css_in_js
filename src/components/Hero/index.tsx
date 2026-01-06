import styled from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' para projetos novos
import { Formulario } from './Hero.module'
import { Div } from './Hero.module'
import { Hero } from './Hero.module'

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <Formulario>
    <Div className="container">
      <Hero>
        As melhores vagas para tecnologia, design e artes visuais.
      </Hero>
    </Div>
  </Formulario>
);

export default Hero
