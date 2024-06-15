import { MigrationInterface, QueryRunner } from "typeorm";

export class AddingItensPedidoTable1718480261013 implements MigrationInterface {
    name = 'AddingItensPedidoTable1718480261013'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "itens-pedido" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantidade" integer NOT NULL, "preco_venda" integer NOT NULL, "pedidoId" uuid, CONSTRAINT "PK_f7faa04488722b7c538f79ab902" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "itens-pedido" ADD CONSTRAINT "FK_53efaed455f57aa9d5c3696812b" FOREIGN KEY ("pedidoId") REFERENCES "pedidos"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "itens-pedido" DROP CONSTRAINT "FK_53efaed455f57aa9d5c3696812b"`);
        await queryRunner.query(`DROP TABLE "itens-pedido"`);
    }

}
