package main.modelos;

import main.Audio;

public class Musica extends Audio {
  private String album;
  private String artista;
  private String genero;


  public String getAlbum() {
    return this.album;
  }

  public void setAlbum(String album) {
    this.album = album;
  }

  public String getArtista() {
    return this.artista;
  }

  public void setArtista(String artista) {
    this.artista = artista;
  }

  public String getGenero() {
    return this.genero;
  }

  public void setGenero(String genero) {
    this.genero = genero;
  }

}
