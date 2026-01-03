import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' para projetos novos
import Vaga from './Vaga.module'
import VagaTitulo from './Vaga.module'
import VagaLink from './Vaga.module'


const root = ReactDOM.createRoot(document.getElementById('root')!);

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

root.render(
  <Vaga>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <VagaLink>
      Ver detalhes e candidatar-se
    </VagaLink>
  </Vaga>
);

export default Vaga
