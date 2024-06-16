import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatingItensPedidoTableField1718567574933 implements MigrationInterface {
    name = 'UpdatingItensPedidoTableField1718567574933'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "itens-pedido" DROP COLUMN "preco_venda"`);
        await queryRunner.query(`ALTER TABLE "itens-pedido" ADD "preco_venda" double precision NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "itens-pedido" DROP COLUMN "preco_venda"`);
        await queryRunner.query(`ALTER TABLE "itens-pedido" ADD "preco_venda" integer NOT NULL`);
    }

}
