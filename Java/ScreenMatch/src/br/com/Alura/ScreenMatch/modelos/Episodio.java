package br.com.Alura.ScreenMatch.modelos;

import br.com.Alura.ScreenMatch.calculos.Classificavel;

public class Episodio implements Classificavel {
  private int numero;
  private String nome;
  private Serie serie;
  private int totalVisualizacoes;


  public int getNumero() {
    return this.numero;
  }

  public void setNumero(int numero) {
    this.numero = numero;
  }

  public String getNome() {
    return this.nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }


  public Serie getSerie() {
    return this.serie;
  }

  public void setSerie(Serie serie) {
    this.serie = serie;
  }

  public int getTotalVisualizacoes() {
    return this.totalVisualizacoes;
  }

  public void setTotalVisualizacoes(int totalVisualizacoes) {
    this.totalVisualizacoes = totalVisualizacoes;
  }

  @Override
  public int getClassificacao() {
    if (totalVisualizacoes > 100) {
      return 4;
    }
    return 2;
  }


}
