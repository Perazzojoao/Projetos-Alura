package br.com.Alura.ScreenMatch.modelos;

public class Titulo {
  private String nome;
  private int anoLancamento;
  private boolean inclusoNoPlano;
  private double somaAvaliacoes;
  private int totalAvaliacoes;
  private int duracaoEmMin;

  public void setNome(String nome) {
    this.nome = nome;
  }

  public void setAnoLancamento(int anoLancamento) {
    this.anoLancamento = anoLancamento;
  }

  public void setDuracaoEmMin(int duracaoEmMin) {
    this.duracaoEmMin = duracaoEmMin;
  }

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
