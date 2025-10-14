import React from "react";
import styled from "styled-components";


const Cabecalho = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`;

export function Header() {
  return (
    Cabecalho
  );
}
