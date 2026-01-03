import styles from './Hero.module'
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' para projetos novos
import Formulario from './Hero.module'
import Div from './Hero.module'
import Hero from './Hero.module'

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <Formulario className={styles.Formulario}>
    <Div className="container">
      <Hero className={styles.Hero}>
        As melhores vagas para tecnologia, design e artes visuais.
      </Hero>
    </Div>
  </Form>
);

export default Hero
