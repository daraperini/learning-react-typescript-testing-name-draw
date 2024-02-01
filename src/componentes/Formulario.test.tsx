import { render, screen } from "@testing-library/react";
import React from "react";
import Formulario from "./Formulario";

//Biblioteca Jest

test("quando o input está vazio, novos participantes não podem ser adicionados", () => {
  render(<Formulario />);

  //encontrar input no DOM
  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );

  //encontrar botão no Dom
  const botao = screen.getByRole("button");

  //garantir que o input esteja no documento
  expect(input).toBeInTheDocument();

  //garantir que o botão esteja desabilitado
  expect(botao).toBeDisabled();
});
