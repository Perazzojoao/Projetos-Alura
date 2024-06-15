import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioRepositoryService } from 'src/modules/usuario/services/usuario-repository.service';
import { EmailEhUnicoValidator } from './validacao/email-eh-unico.validator';
import { UsuarioRepository } from './repository/usuario.repository';
import { UsuarioEntity } from './entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  controllers: [UsuarioController],
  providers: [
    EmailEhUnicoValidator,
    {
      provide: UsuarioRepository,
      useClass: UsuarioRepositoryService,
    },
  ],
})
export class UsuarioModule {}
