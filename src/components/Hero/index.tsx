import styles from './Hero.module'
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' para projetos novos

const Hero = () => (
  <Form className={styles.Form}>
    <Div className="container">
      <Hero className={styles.Hero}>
        As melhores vagas para tecnologia, design e artes visuais.
      </Hero>
    </Div>
  </Form>
)

export default Hero
