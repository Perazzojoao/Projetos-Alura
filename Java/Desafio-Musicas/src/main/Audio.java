package main;

public class Audio {
  private String titulo;
  private int duracaoMin;
  private int totalReproducoes;
  private int totalCurtidas;
  private int classificacao;


  public String getTitulo() {
    return this.titulo;
  }

  public void setTitulo(String titulo) {
    this.titulo = titulo;
  }

  public int getDuracaoMin() {
    return this.duracaoMin;
  }

  public void setDuracaoMin(int duracaoMin) {
    this.duracaoMin = duracaoMin;
  }

  public int getTotalReproducoes() {
    return this.totalReproducoes;
  }

  public int getTotalCurtidas() {
    return this.totalCurtidas;
  }

  public int getClassificacao() {
    return this.classificacao;
  }

  public void curtir() {
    this.totalCurtidas++;
  }

  public void reproduzir() {
    this.totalReproducoes++;

    // reproduzir música.
  }
}
