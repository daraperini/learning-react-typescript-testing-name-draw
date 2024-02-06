import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import ListaParticipantes from ".";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";

jest.mock("../../state/hooks/useListaDeParticipantes", () => {
  return {
    // indica que a useListaDeParticipantes deve se comportar como uma FUNÇÃO
    useListaDeParticipantes: jest.fn(),
  };
});

describe("uma lista vazia de participantes", () => {
  // antes de rodar o teste deve pegar a função que está dentro do useListaDeParticipantes como mock e retornar o valor []
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
  });

  test("deve ser renderizada sem elementos", () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole("listitem");
    expect(itens).toHaveLength(0);
  });
});

describe("uma lista preenchida de participantes", () => {
  const participantes = ["Ana", "Catarina"];

  // antes de rodar o teste deve pegar a função que está dentro do useListaDeParticipantes como mock e retornar o valor 'participantes'
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
  });

  test("deve ser renderizada sem elementos", () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole("listitem");
    expect(itens).toHaveLength(participantes.length);
  });
});
