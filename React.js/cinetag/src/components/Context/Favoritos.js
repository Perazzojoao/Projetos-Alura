const { createContext, useState, useContext } = require('react');

const FavoritosContext = createContext();
FavoritosContext.displayName = 'Favoritos';

export default function FavoritosProvider({ children }) {
	const [favorito, setFavorito] = useState([]);

	return (
		<FavoritosContext.Provider value={{ favorito, setFavorito }}>
			{children}
		</FavoritosContext.Provider>
	);
}

export function useFavoritoContext() {
	const { favorito, setFavorito } = useContext(FavoritosContext);

	function addFavorito(novoFavorito) {
		const favoritoRepetido = favorito.some((item) => item.id === novoFavorito.id);
		const novaLista = favorito.filter((item) => item.id !== novoFavorito.id);

		if (!favoritoRepetido) {
			novaLista.push(novoFavorito);
			return setFavorito(novaLista);
		}
		return setFavorito(novaLista);
	}

	return {
		favorito,
		addFavorito,
	};
}
