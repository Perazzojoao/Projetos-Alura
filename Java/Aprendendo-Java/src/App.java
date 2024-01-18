public class App {
  public static void main(String[] args) throws Exception {
    System.out.println("Esse é o Screen Match");
    System.out.println("Filme: Top Gun: Maverick");

    int ano = 2022;

    System.out.println("Ano de lançamento: " + ano);

    String sinopse = "Sinopse Top Gun:";

    String textoFormatado = """

        Sinopse do filme
        Top Gun:

        Filme de aventura com Tom Cruize.
        Muito bom!
        ...
        """;

    System.out.println(sinopse + textoFormatado);
  }
}
