import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { EmailEhUnico } from '../validacao/email-eh-unico.validator';

// Classe responsável por criar uma interface que valida os dados de entrada para criação de um usuário
export class AtualizaUsuarioDto {
  @IsOptional()
  @IsNotEmpty({message: 'Nome é obrigatório'})
  nome: string;

  @IsOptional()
  @IsEmail(undefined, { message: 'E-mail inválido' })
  @EmailEhUnico({ message: 'E-mail já cadastrado' })
  email: string;

  @IsOptional()
  @MinLength(6, { message: 'Senha deve ter no mínimo 6 caracteres' })
  senha: string;
}
