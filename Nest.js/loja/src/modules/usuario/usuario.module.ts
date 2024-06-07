import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioRepository } from 'src/modules/usuario/usuario.repository';
import { EmailEhUnicoValidator } from './validacao/email-eh-unico.validator';

@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [UsuarioRepository, EmailEhUnicoValidator],
})
export class UsuarioModule {}
