# Aprendendo Nest.js

> Resumo das principais funcionalidades do Nest.js

`DOCUMENTAÇÃO`: https://docs.nestjs.com

## Criar novo projeto Nest

Para criar um novo projeto Nest podemos utilizar dois métodos:

- Baixando a `cli` do Nest e executando seu comando:

      npm i -g @nestjs/cli
      nest new project-name

- Utilizando o `npx` para rodar o comando de forma externa:

      npx @nestjs/cli new project-name

## Instalando Prisma com SQLite

    pnpm i prisma -D

    pnpm dlx prisma init --datasource-provider SQLite

### Realizando migrations ao alterar algo nas tabelas

    pnpm dlx prisma migrate dev 

### Instalar prisma como dependência de produção

    pnpm i @prisma/client

### Visualizar banco de dados no navegador

    pnpm dlx prisma studio

## Controllers

Controllers são onde definimos as rotas da aplicação e seus respectivos métodos.

### Criação

Para criar um novo controller, criamos uma classe:

```
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

```
@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [UsuarioRepository],
})
export class UsuarioModule {}
```