import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Query,
  UseInterceptors,
  UseGuards,
  Req,
} from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { HttpResponse } from 'src/lib/http-response';
import { PedidoService } from './pedido.service';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { AuthGuard, RequestWithUsuario } from '../auth/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('pedidos')
@UseInterceptors(CacheInterceptor)
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Post()
  async create(@Req() req: RequestWithUsuario, @Body() createPedidoDto: CreatePedidoDto) {
    const usuarioId = req.usuario.sub;
    const newPedido = await this.pedidoService.create(usuarioId, createPedidoDto);
    return new HttpResponse(newPedido, 'Pedido criado com sucesso', HttpStatus.CREATED);
  }

  @Get()
  async findAll() {
    const pedidos = await this.pedidoService.findAll();
    return new HttpResponse(pedidos, 'Pedidos encontrados com sucesso', HttpStatus.OK);
  }

  @Get(':id')
  async findOne(@Req() req: RequestWithUsuario, @Param('id') pedidoId: string) {
    const usuarioId = req.usuario.sub;
    const pedido = await this.pedidoService.findOne(pedidoId, usuarioId);
    return new HttpResponse(pedido, 'Pedido encontrado com sucesso');
  }

  @Patch(':id')
  async update(@Req() req: RequestWithUsuario, @Param('id') pedidoId: string, @Body() updatePedidoDto: UpdatePedidoDto) {
    const usuarioId = req.usuario.sub;
    const updatedPedido = await this.pedidoService.update(pedidoId, updatePedidoDto, usuarioId);
    return new HttpResponse(updatedPedido, 'Pedido atualizado com sucesso', HttpStatus.OK);
  }

  @Delete(':id')
  async remove(@Req() req: RequestWithUsuario, @Param('id') pedidoId: string) {
    const usuarioId = req.usuario.sub;
    const deleted = await this.pedidoService.delete(pedidoId, usuarioId);
    return new HttpResponse(deleted, 'Pedido removido com sucesso');
  }
}
