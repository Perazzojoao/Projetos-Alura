import main.modelos.Favoritos;
import main.modelos.Musica;
import main.modelos.Podcast;

public class App {
	public static void main(String[] args) throws Exception {
		Musica minhaMusica = new Musica();
		minhaMusica.setTitulo("Enemy");
		minhaMusica.setArtista("Imagine Dragons");

		Podcast meuPodcast = new Podcast();
		meuPodcast.setTitulo("Flow Podcast");
		meuPodcast.setHost("Igor 3k");

		Favoritos meusFavoritos = new Favoritos();
		meusFavoritos.incluir(minhaMusica);
		meusFavoritos.incluir(meuPodcast);
	}
}
