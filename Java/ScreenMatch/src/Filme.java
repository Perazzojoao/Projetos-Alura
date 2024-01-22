public class Filme {
  String nome;
  int anoLancamento;
  boolean inclusoNoPlano;
  private double somaAvaliacoes;
  private int totalAvaliacoes;
  int duracaoEmMin;

  public void mostrarFichaTecnica() {
    System.out.printf("""
      Nome do filme: %s
      Ano de lançamento: %d
      Duração: %d min
      """, nome,anoLancamento, duracaoEmMin);
  }

  public void avaliar(double nota) {
    somaAvaliacoes += nota;
    totalAvaliacoes++;
  }

  public double obterMedia() {
    return somaAvaliacoes / totalAvaliacoes;
  }

  public int getTotalAvaliacoes() {
    return totalAvaliacoes;
  }
}
