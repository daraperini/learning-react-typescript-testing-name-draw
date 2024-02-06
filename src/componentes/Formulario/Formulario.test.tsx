import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Formulario from ".";
import { RecoilRoot } from "recoil";

describe("comportamento do Formulario.tsx", () => {
  
  test("quando o input está vazio, novos participantes não podem ser adicionados", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

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

  test("adicionar um participante caso exista um nome preenchido", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    //encontrar input no DOM
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    //encontrar botão no Dom
    const botao = screen.getByRole("button");

    // inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Ana",
      },
    });

    // clicar no botão de submeter
    fireEvent.click(botao);

    // garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus();

    // garantir que o input não tenha um valor
    expect(input).toHaveValue("");
  });

  test("nomes duplicados não podem ser adicionados na lista", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const botao = screen.getByRole("button");

    // inserir dois valores iguais no input
    fireEvent.change(input, {
      target: {
        value: "Ana",
      },
    });
    fireEvent.click(botao);

    fireEvent.change(input, {
      target: {
        value: "Ana",
      },
    });
    fireEvent.click(botao);

    // encontra a mensagem de erro
    const mensagemDeErro = screen.getByRole("alert");

    // garantir que a mensagem de erro é exibida
    expect(mensagemDeErro.textContent).toBe(
      "Nomes duplicados não são permitidos!"
    );
  });

  test("mensagem de erro deve sumir após os timers", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const botao = screen.getByRole("button");

    // inserir dois valores iguais no input
    fireEvent.change(input, {
      target: {
        value: "Ana",
      },
    });
    fireEvent.click(botao);

    fireEvent.change(input, {
      target: {
        value: "Ana",
      },
    });
    fireEvent.click(botao);

    let mensagemDeErro = screen.queryByRole("alert");
    // mensagem de erro deve existir
    expect(mensagemDeErro).toBeInTheDocument();

    act(() => {
      // esperar N segundos
      jest.runAllTimers();
    });

    mensagemDeErro = screen.queryByRole("alert");
    // mensagem de erro deve não existir
    expect(mensagemDeErro).toBeNull();
  });
});
