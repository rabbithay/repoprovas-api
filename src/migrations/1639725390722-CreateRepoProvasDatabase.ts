import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateRepoProvasDatabase1639725390722 implements MigrationInterface {
    name = 'CreateRepoProvasDatabase1639725390722'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "teachers" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_a8d4f83be3abe4c687b0a0093c8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exams" ("id" SERIAL NOT NULL, "teacherId" integer NOT NULL, "subjectId" integer NOT NULL, "title" character varying NOT NULL, "link" character varying NOT NULL, "category" character varying NOT NULL, CONSTRAINT "PK_b43159ee3efa440952794b4f53e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subjects" ("id" SERIAL NOT NULL, "courseId" integer NOT NULL, "title" character varying NOT NULL, "semester" integer NOT NULL, CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "courses" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_3f70a487cc718ad8eda4e6d58c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "teacher_subject" ("subject_id" integer NOT NULL, "teacher_id" integer NOT NULL, CONSTRAINT "PK_63df5db8af0e54ee767aeb623b8" PRIMARY KEY ("subject_id", "teacher_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c876c0444684d4812824989ba2" ON "teacher_subject" ("subject_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_2a9d30cb4207da7ddf7c109097" ON "teacher_subject" ("teacher_id") `);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_698b8b125b1bf0e0d4a38bee303" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_1dc4dcc3e975e1378e9d235cd1c" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD CONSTRAINT "FK_be7152766987a7bcdcac0401510" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "teacher_subject" ADD CONSTRAINT "FK_c876c0444684d4812824989ba2c" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "teacher_subject" ADD CONSTRAINT "FK_2a9d30cb4207da7ddf7c109097a" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teacher_subject" DROP CONSTRAINT "FK_2a9d30cb4207da7ddf7c109097a"`);
        await queryRunner.query(`ALTER TABLE "teacher_subject" DROP CONSTRAINT "FK_c876c0444684d4812824989ba2c"`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP CONSTRAINT "FK_be7152766987a7bcdcac0401510"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_1dc4dcc3e975e1378e9d235cd1c"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_698b8b125b1bf0e0d4a38bee303"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2a9d30cb4207da7ddf7c109097"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c876c0444684d4812824989ba2"`);
        await queryRunner.query(`DROP TABLE "teacher_subject"`);
        await queryRunner.query(`DROP TABLE "courses"`);
        await queryRunner.query(`DROP TABLE "subjects"`);
        await queryRunner.query(`DROP TABLE "exams"`);
        await queryRunner.query(`DROP TABLE "teachers"`);
    }

}
