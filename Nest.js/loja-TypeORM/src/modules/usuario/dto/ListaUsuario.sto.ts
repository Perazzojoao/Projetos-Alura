export class ListaUsuarioDto {
  constructor(
    readonly id: string,
    readonly nome: string,
    readonly email: string,
  ) {}
}