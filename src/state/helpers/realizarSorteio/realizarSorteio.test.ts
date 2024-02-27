import { realizarSorteio } from "./realizarSorteio"

describe('dado num sorteio de amigo secreto', () => {

    test('cada participante não sorteie o próprio nome', () => {

        const participantes = [
            'Ana',
            'Catarina',
            'Juliana',
            'Joao',
            'Luis',
            'Natalia'
        ]

        const sorteio = realizarSorteio(participantes)
        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})