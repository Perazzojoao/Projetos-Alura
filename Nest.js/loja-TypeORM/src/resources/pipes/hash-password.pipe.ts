import { Injectable, PipeTransform } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashPasswordPipe implements PipeTransform {
  constructor(private configService: ConfigService) {}

  async transform(value: string) {
    const salt = this.configService.get<string>('HASH_SALT'); // Código para buscar o valor da variável de ambiente

    const senhaHasheada = await bcrypt.hash(value, salt!);

    return senhaHasheada;
  }
}
