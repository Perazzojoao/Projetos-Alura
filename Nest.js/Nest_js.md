# Aprendendo Nest.js

> Resumo das principais funcionalidades do Nest.js

`DOCUMENTAÇÃO`: <https://docs.nestjs.com>

## Criar novo projeto Nest

Para criar um novo projeto Nest podemos utilizar dois métodos:

- Baixando a `cli` do Nest e executando seu comando:

      npm i -g @nestjs/cli
      nest new project-name

- Utilizando o `npx` para rodar o comando de forma externa:

      npx @nestjs/cli new project-name

## [Configurando variáveis de ambiente](https://docs.nestjs.com/techniques/configuration)

Para ter acesso ao arquivo .env com suas variáveis de ambiente precisamos instalar e configurar seu uso.

    pnpm i @nestjs/config

Para configurar seu acesso, adicione o seguinte código no arquivo app.module.ts:

```typescript
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
})
export class AppModule {}
```

Com isso, suas variáveis de ambiente já estarão acessíveis dentro do módulo em que foi adicionado.

Para liberar seu uso de forma global, adicione `{isGlobal: true}` na função `forRoot()`

**Ex:**

    @Module({
      imports: [ConfigModule.forRoot({
        isGlobal: true
      })],
    })

**Obs:** Esta configuração apenas da acesso ao arquivo nomeado como `.env` na raíz do projeto. Para acessar outros arquivos, é necessário passar o nome do arquivo como parâmetro da função `forRoot()`. Ex: `forRoot({envFilePath: '.env.development'})`. Para mais detalhes, acesse a [documentação](https://docs.nestjs.com/techniques/configuration).

## Uso

Para acessar as variáveis de ambiente, basta importar o módulo `ConfigService` e injetá-lo no construtor da classe que deseja utilizar. Após isso, basta chamar o método `get()` passando o nome da variável desejada.

**Ex:**

    constructor(private configService: ConfigService) {}

    const port = this.configService.get('PORT');

## Instalando Prisma com SQLite

    pnpm i prisma -D

    pnpm dlx prisma init --datasource-provider SQLite

### Realizando migrations ao alterar algo nas tabelas

    pnpm dlx prisma migrate dev

### Instalar prisma como dependência de produção

    pnpm i @prisma/client

### Visualizar banco de dados no navegador

    pnpm dlx prisma studio

## Instalando TypeORM com Postgres

    pnpm i @nestjs/typeorm typeorm

    pnpm i pg

### Migrações

Para criar migrações, primeiro criamos um arquivo de configuração de migrações do typeorm:

**Ex:** `database/data-source-cli.ts`

```typescript
import { DataSource, DataSourceOptions } from 'typeorm';
import 'dotenv/config';

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/../modules/**/entities/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
```

Após isso, instalamos o typeorm cli:

    pnpm i -g typeorm

Com isso, podemos criar um script para rodar as migrações de maneira mais fácil. Adicione o seguinte script no `package.json`:

```json
"typeorm": "typeorm-ts-node-esm --dataSource dist/database/data-source-cli.js"
```

Este comando irá acessar o arquivo de configuração de migrações e rodar os comandos do typeorm com base nele.

### Comandos úteis

Criar uma nova migração:

    pnpm typeorm migration:generate path/to/migration/migration-name

Rodar a migração:

    pnpm typeorm migration:run

Mostrar as migrações já rodadas:

    pnpm typeorm migration:show

**Obs:** Devido a um bug no typeorm, é necessário adicionar o caminho até o arquivo de configuração de migrações na pasta `dist` do projeto. Sendo assim, é necessário rodar o comando `pnpm build` antes de rodar os comandos do typeorm.

## Caching com cache-manager do nestjs

Para utilizar o cache nativo do nestjs, precisamos instalar o pacote `@nestjs/cache-manager`:

    pnpm install @nestjs/cache-manager cache-manager

Após isso, podemos configurar o cache no módulo desejado:

```typescript
@Module({
  imports: [
    CacheModule.register({ isGlobal: true, ttl: 10000 }), // ttl = time to live in ms
  ],
})
```

Com isso, o cache estará disponível para ser utilizado em qualquer serviço ou controller. Para utiliza-lo, basta importar o `CacheInterceptor` e adicionar o decorator `@UseInterceptors(CacheInterceptor)` no método desejado.

```typescript
@Controller('produtos')
@UseInterceptors(CacheInterceptor)
export class ProdutoController {}
```

## Caching com Redis

Para utilizar o Redis como cache, precisamos instalar o pacote `cache-manager-redis-store`:

    pnpm install @nestjs/cache-manager cache-manager

    pnpm install cache-manager-redis-yet

Após isso, podemos configurar o cache no módulo desejado:

```typescript
@Module({
  imports: [
    CacheModule.registerAsync({
      useFactory: async () => ({
        store: await redisStore({ ttl: 10 * 1000 }), // ttl = time to live in ms
      }),
      isGlobal: true,
    }),
  ],
})
```

## Hashing de senhas

Para realizar o hashing de senhas, podemos utilizar o pacote `bcrypt`:

    pnpm install bcrypt

## Autenticação com JWT

Para realizar a autenticação com JWT, podemos utilizar o pacote `@nestjs/jwt`:

    pnpm install @nestjs/jwt passport-jwt

Após isso, podemos configurar o JWT no módulo desejado:
  
  ```typescript
  @Module({
    imports: [
    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
      }),
    }),
  ],
  })
  ```

## Controllers

Controllers são onde definimos as rotas da aplicação e seus respectivos métodos.

### Criação

Para criar um novo controller, criamos uma classe:

```typescript
@Controller('/usuarios')  // Decorator para marcar a classe como um controller
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}  // Dependency injection

  @Post()
  async criaUsuario(@Body() usuario: CriaUsuarioDto){
    this.usuarioRepository.salvar(usuario);
    return usuario;
  }

  @Get()
  async buscaUsuarios(){
    return this.usuarioRepository.buscarTodos();
  }
}
```

Após isso, devemos adicionar o controller ao seu respectivo `module`:

```typescript
@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [UsuarioRepository],
})
export class UsuarioModule {}
```
