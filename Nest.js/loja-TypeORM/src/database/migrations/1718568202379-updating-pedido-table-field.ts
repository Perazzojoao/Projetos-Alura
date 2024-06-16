import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatingPedidoTableField1718568202379 implements MigrationInterface {
    name = 'UpdatingPedidoTableField1718568202379'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedidos" DROP COLUMN "valor_total"`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD "valor_total" double precision NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedidos" DROP COLUMN "valor_total"`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD "valor_total" integer NOT NULL`);
    }

}
