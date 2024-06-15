import { StatusPedido } from "../enum/statusPedidi.enum";
import { IsNumber, IsNotEmpty, Min, IsString, IsEnum, IsUUID } from "class-validator";

export class CreatePedidoDto {
  @IsNotEmpty({ message: 'Valor total é obrigatório' })
  @IsNumber({ maxDecimalPlaces: 0 }, { message: 'Valor total deve ser um número inteiro' })
  @Min(0, { message: 'Valor total deve ser um número positivo' })
  valorTotal: number;

  @IsNotEmpty({ message: 'Status é obrigatório' })
  @IsEnum(StatusPedido, { message: 'Status inválido' })
  status: StatusPedido;

  @IsNotEmpty({ message: 'Usuário é obrigatório' })
  @IsUUID('4', { message: 'Usuário inválido' })
  usuarioId: string;
}
