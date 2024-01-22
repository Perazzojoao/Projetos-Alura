package br.com.Alura.ScreenMatch.calculos;

import br.com.Alura.ScreenMatch.modelos.Titulo;

public class ConverterTempo {
  private int tempoTotal = 0;


  public int getTempoTotal() {
    return this.tempoTotal;
  }

  public void incluir(Titulo titulo) {
    this.tempoTotal += titulo.getDuracaoEmMin();
  }
}
