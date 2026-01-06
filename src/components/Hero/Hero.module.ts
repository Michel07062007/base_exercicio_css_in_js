import styled from "styled-components"

const Formulario = styled.form `
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
`
 const MeuComponente = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-color: var(--cor-principal);
    opacity: 0.7;
  }
`;

const Div = styled.div `
  position: relative;
  color: #eee;
`

const Hero = styled.h2 `
  font-family: Gloock, serif;
  font-size: 48px;
`
const Form = styled.form`
  // estilos normais
  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;


  const Hero = styled.h2
    font-size: 32px;
}`

export { Formulario, Div, Hero}
