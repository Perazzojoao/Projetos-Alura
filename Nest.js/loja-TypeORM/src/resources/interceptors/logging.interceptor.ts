import { Injectable, NestInterceptor, ExecutionContext, CallHandler, ConsoleLogger } from '@nestjs/common';
import { bgWhite, bgYellow, cyan, green, yellow } from 'colors';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RequestWithUsuario } from 'src/modules/auth/guards/auth.guard';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: ConsoleLogger) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest<Request | RequestWithUsuario>();
    const now = Date.now();
    return next.handle().pipe(
      tap(() => {
        if ('usuario' in request) {
          this.logger.log(
            `${cyan(request.method)} ${cyan(request.url)} - ${green('user:')} ${request.usuario.sub}: ` +
              yellow(`+${Date.now() - now}ms`),
            'Logger',
          );
        }
      }),
    );
  }
}
