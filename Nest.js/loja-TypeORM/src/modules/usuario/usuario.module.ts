import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { EmailEhUnicoValidator } from './validacao/email-eh-unico.validator';
import { UsuarioRepository } from './repository/usuario.repository';
import { UsuarioEntity } from './entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioInterfaceRepository } from './repository/usuario.interface.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  controllers: [UsuarioController],
  providers: [
    EmailEhUnicoValidator,
    {
      provide: UsuarioInterfaceRepository,
      useClass: UsuarioRepository,
    },
    UsuarioService,
  ],
  exports: [UsuarioService, UsuarioInterfaceRepository],
})
export class UsuarioModule {}
