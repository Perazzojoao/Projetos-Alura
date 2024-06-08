export class UsuarioEntity {
  id: number;
  nome: string;
  email: string;
  senha: string;

  constructor(nome: string, email: string, senha: string) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }
}
