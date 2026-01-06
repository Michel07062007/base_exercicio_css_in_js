import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' para projetos novos
import { ListaVaga } from './Vaga.module'
import { VagaTitulo } from './Vaga.module'
import { VagaLink } from './Vaga.module'


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
function Vaga({ titulo, localizacao, nivel, modalidade, salarioMin, salarioMax, requisitos }: Props) {
  root.render(
    <div>
      <VagaTitulo>{titulo}</VagaTitulo>
      <ul>
        <ListaVaga>Localizacao: {localizacao}</ListaVaga>
        <ListaVaga>Senioridade: {nivel}</ListaVaga>
        <ListaVaga>Tipo de contratacao: {modalidade}</ListaVaga>
        <ListaVaga>Salário: {salarioMin} - {salarioMax}</ListaVaga>
        <ListaVaga>Requisitos: {requisitos.join(', ')}</ListaVaga>
      </ul>
      <VagaLink>
        Ver detalhes e candidatar-se
      </VagaLink>
    </div>
  );
}
export default Vaga
