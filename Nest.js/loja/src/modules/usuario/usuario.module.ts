import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioRepositoryService } from 'src/modules/usuario/services/usuario-repository.service';
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
      useClass: UsuarioRepositoryService,
    },
  ],
})
export class UsuarioModule {}
