import { PartialType } from '@nestjs/mapped-types';
import { CriaUsuarioDto } from './CriaUsuario.dto';

// Classe responsável por criar uma interface que valida os dados de entrada para criação de um usuário
export class AtualizaUsuarioDto extends PartialType(CriaUsuarioDto) {}
