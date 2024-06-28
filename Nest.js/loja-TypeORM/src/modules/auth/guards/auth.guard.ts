import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { UsuarioPayload } from '../auth.service';

export interface RequestWithUsuario extends Request {
  usuario: UsuarioPayload;
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<RequestWithUsuario>();

    const token = this.getToken(request);
    if (!token) {
      throw new UnauthorizedException('Erro de autenticação');
    }

    const payload = await this.validateToken(token);
    request.usuario = payload;

    return true;
  }

  private getToken(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    if (type !== 'Bearer') {
      return;
    }

    return token;
  }

  private async validateToken(token: string): Promise<UsuarioPayload> {
    try {
      const payload: UsuarioPayload = await this.jwtService.verifyAsync(token);
      return payload;
    } catch (error) {
      console.error(error);
      throw new UnauthorizedException('Token inválido');
    }
  }
}
