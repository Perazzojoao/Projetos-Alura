import { ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UsuarioRepository } from "../repository/usuario.repository";
import { Injectable } from "@nestjs/common";
import { UsuarioAbstractRepository } from "../repository/usuario.abstract.repository";

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailEhUnicoValidator implements ValidatorConstraintInterface{
  constructor(private usuarioRepository: UsuarioAbstractRepository) {}

  async validate(email: string) {
    const usuarioExiste = await this.usuarioRepository.buscarPorEmail(email);
    return !usuarioExiste;
  }
}

// Criando um decorator de validação personalizado
export const EmailEhUnico = (opcoesDeValidacao: ValidationOptions) => {
  return (object: object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: opcoesDeValidacao,
      constraints: [],
      validator: EmailEhUnicoValidator,
    });
  };
}