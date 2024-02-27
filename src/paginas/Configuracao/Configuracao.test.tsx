import React from "react";
import { RecoilRoot } from "recoil";
import Configuracao from ".";
import { render } from "@testing-library/react";

const mockNavegacao = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavegacao,
  };
});

describe("a página de configuração", () => {
  test("deve ser renderizada corretamente", () => {

    // pega o container onde foi renderizado
    const {container} = render(
      <RecoilRoot>
        <Configuracao />
      </RecoilRoot>
    )

    // espera que todas as renderizações sejam iguais visualmente
    expect(container).toMatchSnapshot()
  });
});
