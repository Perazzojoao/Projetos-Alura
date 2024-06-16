import { Type } from 'class-transformer';
import { ItensPedidoEntity } from '../entities/itens-pedido.entity';
import { StatusPedido } from '../enum/statusPedidi.enum';
import { IsNumber, IsNotEmpty, Min, IsEnum, IsUUID, IsArray, ArrayMinSize } from 'class-validator';

export class CreatePedidoDto {
  @IsNotEmpty({ message: 'Status é obrigatório' })
  @IsEnum(StatusPedido, { message: 'Status inválido' })
  status: StatusPedido;

  @IsNotEmpty({ message: 'Itens do pedido são obrigatórios' })
  @IsArray({ message: 'Itens do pedido devem ser um array' })
  @ArrayMinSize(1, { message: 'Deve ter no mínimo um item no pedido' })
  @Type(() => ItensPedidoDto)
  itensPedido: ItensPedidoDto[];
}

class ItensPedidoDto extends ItensPedidoEntity{
  @IsNotEmpty({ message: 'Quantidade é obrigatória' })
  @IsNumber({ maxDecimalPlaces: 0 }, { message: 'Quantidade inválida' })
  @Min(1, { message: 'Quantidade deve ser maior que 0' })
  quantidade: number;

  @IsNotEmpty({ message: 'Preço de venda é obrigatório' })
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Preço de venda inválido' })
  @Min(0.01, { message: 'Preço de venda deve ser maior que 0' })
  precoVenda: number;
}
