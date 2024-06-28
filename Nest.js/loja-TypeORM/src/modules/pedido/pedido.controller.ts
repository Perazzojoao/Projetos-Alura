import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Query } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { HttpResponse } from 'src/lib/http-response';
import { PedidoService } from './pedido.service';

@Controller('pedidos')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Post()
  async create(@Query('usuario') usuarioId: string, @Body() createPedidoDto: CreatePedidoDto) {
    const newPedido = await this.pedidoService.create(usuarioId, createPedidoDto);
    return new HttpResponse(newPedido, 'Pedido criado com sucesso', HttpStatus.CREATED);
  }

  @Get()
  async findAll() {
    const pedidos = await this.pedidoService.findAll();
    return new HttpResponse(pedidos, 'Pedidos encontrados com sucesso', HttpStatus.OK);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const pedido = await this.pedidoService.findOne(id);
    return new HttpResponse(pedido, 'Pedido encontrado com sucesso');
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePedidoDto: UpdatePedidoDto) {
    const updatedPedido = await this.pedidoService.update(id, updatePedidoDto);
    return new HttpResponse(updatedPedido, 'Pedido atualizado com sucesso', HttpStatus.OK);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const deleted = await this.pedidoService.delete(id);
    return new HttpResponse(deleted, 'Pedido removido com sucesso');
  }
}
