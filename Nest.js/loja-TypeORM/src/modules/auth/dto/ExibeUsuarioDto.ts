export class ExibeUsuarioDto {
  constructor(
    readonly id: string,
    readonly nome: string,
    readonly email: string,
  ) {}
}