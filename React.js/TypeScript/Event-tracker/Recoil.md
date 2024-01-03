# Recoil

> Principais funcionalidades da biblioteca Recoil

A biblioteca Recoil integra funcionalidades da Context Api em uma biblioteca minimalista, eficiente e que tenta se parecer o máximo possível com o próprio React

## Criando o Atom

Novos contextos são criados em uma pasta separada. Nessa pasta criamos o chamado "Atom", arquivo esse que usamos para criar nossos estados antes de compartilha-los.

**Criando um atom:**

    export const <nome_estado> = atom({ key, default });

- **Key:** chave única para o Atom.

- **Default:** Valor inicial para o estado criado.

**Ex:**

```
  export const listaDeEventosState = atom<IEvento[]>({
	key: 'listaDeEventosState',
	default: [
		{
			descricao: 'Estudar React',
			inicio: new Date('2022-01-15T09:00'),
			fim: new Date('2022-01-15T13:00'),
			completo: false,
			id: 1642342747,
		},
		{
			descricao: 'Estudar Recoil',
			inicio: new Date('2022-01-16T09:00'),
			fim: new Date('2022-01-16T11:00'),
			completo: false,
			id: 1642342959,
		},
	],
});
```

## Utilizando o contexto (Atom)

- 1° Para prover acesso aos componentes, precisamos envolve-los na tag `<RecoilRoot>`

**Ex:**

```
	function App () {
		return (
			<RecoilRoot>
				.
				.
				.
			</RecoilRoot>
		);
	}
```

- 2° Para utilizar os estados criados precisamos utilizar o hook `useRecoilValue()`

	- **Sintax:** const `<nome_variável>` = `useRecoilValue(<atom>)`

**OBS:** O `<atom>` é a variável criada e exportada no atom.tsx

**Ex:**

		const eventos = useRecoilValue(listaDeEventosState);
