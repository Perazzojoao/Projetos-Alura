package main.modelos;

import main.Audio;

public class Podcast extends Audio {
  private String host;
  private String descricao;


  public String getHost() {
    return this.host;
  }

  public void setHost(String host) {
    this.host = host;
  }

  public String getDescricao() {
    return this.descricao;
  }

  public void setDescricao(String descricao) {
    this.descricao = descricao;
  }

  @Override
  public int getClassificacao() {
    if (this.getTotalCurtidas() > 500) {
      return 10;
    }
    return 8;
  }
}
