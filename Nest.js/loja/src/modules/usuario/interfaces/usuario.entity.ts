import { PrismaService } from 'src/database/prisma.service';

export class UsuarioEntity {
  id: number;
  nome: string;
  email: string;
  senha: string;
  [key: string]: any;

  constructor(nome: string, email: string, senha: string) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }
}
