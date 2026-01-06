import { FormEvent, useState } from 'react'
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' para projetos novos
import { Formulario } from './FormVagas.module'
import { Campo } from './FormVagas.module'
import { BtnPesquisar } from './FormVagas.module'

const root = ReactDOM.createRoot(document.getElementById('root')!);

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  root.render(
    <Formulario onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BtnPesquisar type="submit">
        Pesquisar
      </BtnPesquisar>
    </Formulario>
  )
}
export default FormVagas
