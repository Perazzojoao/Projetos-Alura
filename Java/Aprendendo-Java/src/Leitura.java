import java.util.Scanner;

public class Leitura {
  public static void main(String[] args) {
    try (Scanner leitura = new Scanner(System.in)) {
      System.out.println("Digite seu filme favorito: ");
      String filme = leitura.nextLine();

      System.out.println("Qual o ano de lançamento?");
      int anoDeLancamento = leitura.nextInt();

      System.out.println("Giga sua avaliação para o filme: ");
      double avaliacao = leitura.nextDouble();

      System.out.println(filme);
      System.out.println(anoDeLancamento);
      System.out.println(avaliacao);
    }
  }
}
