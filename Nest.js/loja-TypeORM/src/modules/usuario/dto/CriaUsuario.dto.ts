import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { EmailEhUnico } from '../validacao/email-eh-unico.validator';

// Classe responsável por criar uma interface que valida os dados de entrada para criação de um usuário
export class CriaUsuarioDto {
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  nome: string;

  @IsEmail(undefined, { message: 'E-mail inválido' })
  @EmailEhUnico({ message: 'E-mail já cadastrado' })
  email: string;

  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W+).{6,30}$/, {
    message:
      'A senha deve conter pelo menos uma letra minúscula, uma letra maiúscula, um dígito, um caractere especial e ter entre 8 e 30 caracteres.',
  })
  senha: string;
}
