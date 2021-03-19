import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateInstitutions1616111324109 implements MigrationInterface {
    name = 'CreateInstitutions1616111324109'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "institution" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "cnpj" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "graduations" character varying, "doctors" character varying, "masters" character varying, "type" character varying NOT NULL, CONSTRAINT "PK_f60ee4ff0719b7df54830b39087" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_829e3ef7ee5db8aed1a64a2545" ON "institution" ("type") `);
        await queryRunner.query(`ALTER TABLE "student" ADD "email" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "email"`);
        await queryRunner.query(`DROP INDEX "IDX_829e3ef7ee5db8aed1a64a2545"`);
        await queryRunner.query(`DROP TABLE "institution"`);
    }

}
