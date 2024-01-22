package br.com.Alura.ScreenMatch.modelos;

public class Serie extends Titulo {
  private int temporadas;
  private boolean ativa;
  private int epsPorTemporada;
  private int minPorEp;


  public int getTemporadas() {
    return this.temporadas;
  }

  public void setTemporadas(int temporadas) {
    this.temporadas = temporadas;
  }

  public boolean getAtiva() {
    return this.ativa;
  }

  public void setAtiva(boolean ativa) {
    this.ativa = ativa;
  }

  public int getEpsPorTemporada() {
    return this.epsPorTemporada;
  }

  public void setEpsPorTemporada(int epsPorTemporada) {
    this.epsPorTemporada = epsPorTemporada;
  }

  public int getMinPorEp() {
    return this.minPorEp;
  }

  public void setMinPorEp(int minPorEp) {
    this.minPorEp = minPorEp;
  }
}
