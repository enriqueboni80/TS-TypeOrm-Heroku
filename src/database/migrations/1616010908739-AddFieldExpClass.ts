import {MigrationInterface, QueryRunner} from "typeorm";

export class AddFieldExpClass1616010908739 implements MigrationInterface {
    name = 'AddFieldExpClass1616010908739'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "class" ADD "exp" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "class" DROP COLUMN "exp"`);
    }

}
