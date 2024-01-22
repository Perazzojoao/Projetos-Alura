public class App {
	public static void main(String[] args) throws Exception {
		Filme meuFilme = new Filme();
		meuFilme.nome = "O poderoso chefão";
		meuFilme.anoLancamento = 1970;
		meuFilme.duracaoEmMin = 180;

		meuFilme.mostrarFichaTecnica();
		meuFilme.avaliar(8.7);
		meuFilme.avaliar(5.3);
		meuFilme.avaliar(10);

		System.out.println(meuFilme.obterMedia());
		System.out.println("Total de avaliações: " + meuFilme.getTotalAvaliacoes());
	}
}
