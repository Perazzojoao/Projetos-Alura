import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { PrismaUsuarioRepository } from 'src/modules/usuario/repository/prisma/prisma-usuario.repository';
import { EmailEhUnicoValidator } from './validacao/email-eh-unico.validator';
import { PrismaService } from 'src/database/prisma.service';
import { UsuarioRepository } from './repository/usuario.repository';

@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [
    PrismaService,
    EmailEhUnicoValidator,
    {
      provide: UsuarioRepository,
      useClass: PrismaUsuarioRepository,
    },
  ],
})
export class UsuarioModule {}
