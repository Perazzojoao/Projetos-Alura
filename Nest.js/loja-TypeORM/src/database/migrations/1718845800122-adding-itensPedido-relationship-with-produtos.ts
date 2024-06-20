import { MigrationInterface, QueryRunner } from "typeorm";

export class AddingItensPedidoRelationshipWithProdutos1718845800122 implements MigrationInterface {
    name = 'AddingItensPedidoRelationshipWithProdutos1718845800122'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "itens-pedido" ADD "produtoId" uuid`);
        await queryRunner.query(`ALTER TABLE "itens-pedido" ADD CONSTRAINT "FK_a6a527415a863cedc808fc6a181" FOREIGN KEY ("produtoId") REFERENCES "produtos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "itens-pedido" DROP CONSTRAINT "FK_a6a527415a863cedc808fc6a181"`);
        await queryRunner.query(`ALTER TABLE "itens-pedido" DROP COLUMN "produtoId"`);
    }

}
