import { MigrationInterface, QueryRunner } from "typeorm";

export class CriaTabelas1718158751269 implements MigrationInterface {
    name = 'CriaTabelas1718158751269'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "usuario_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produtos" ADD "usuario_id" character varying(100) NOT NULL`);
    }

}
