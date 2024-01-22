import br.com.Alura.ScreenMatch.modelos.*;

public class App {
	public static void main(String[] args) throws Exception {
		Filme meuFilme = new Filme();

		meuFilme.setNome("O poderoso chefão");
		meuFilme.setAnoLancamento(1970);
		meuFilme.setDuracaoEmMin(180);

		meuFilme.mostrarFichaTecnica();
		meuFilme.avaliar(8.7);
		meuFilme.avaliar(5.3);
		meuFilme.avaliar(10);

		System.out.println(meuFilme.obterMedia());
		System.out.println("Total de avaliações: " + meuFilme.getTotalAvaliacoes());

		Serie lost = new Serie();
		lost.setNome("Lost");
		lost.setAnoLancamento(2000);
		lost.setDuracaoEmMin(3522);
		lost.setTemporadas(10);
		lost.setEpsPorTemporada(10);
		lost.setMinPorEp(50);

		System.out.println("Duração para maratonar Lost: " + lost.getDuracaoEmMin() + " min");
	}
}
