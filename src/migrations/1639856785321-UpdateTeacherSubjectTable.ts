import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateTeacherSubjectTable1639856785321 implements MigrationInterface {
    name = 'UpdateTeacherSubjectTable1639856785321'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teacher_subject" DROP CONSTRAINT "FK_c876c0444684d4812824989ba2c"`);
        await queryRunner.query(`ALTER TABLE "teacher_subject" DROP CONSTRAINT "FK_2a9d30cb4207da7ddf7c109097a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c876c0444684d4812824989ba2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2a9d30cb4207da7ddf7c109097"`);
        await queryRunner.query(`ALTER TABLE "teacher_subject" DROP CONSTRAINT "PK_63df5db8af0e54ee767aeb623b8"`);
        await queryRunner.query(`ALTER TABLE "teacher_subject" ADD CONSTRAINT "PK_2a9d30cb4207da7ddf7c109097a" PRIMARY KEY ("teacher_id")`);
        await queryRunner.query(`ALTER TABLE "teacher_subject" DROP COLUMN "subject_id"`);
        await queryRunner.query(`ALTER TABLE "teacher_subject" DROP CONSTRAINT "PK_2a9d30cb4207da7ddf7c109097a"`);
        await queryRunner.query(`ALTER TABLE "teacher_subject" DROP COLUMN "teacher_id"`);
        await queryRunner.query(`ALTER TABLE "teacher_subject" ADD "subjectId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "teacher_subject" ADD CONSTRAINT "PK_d45dd4ef36ee9d722e23b9da312" PRIMARY KEY ("subjectId")`);
        await queryRunner.query(`ALTER TABLE "teacher_subject" ADD "teacherId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "teacher_subject" DROP CONSTRAINT "PK_d45dd4ef36ee9d722e23b9da312"`);
        await queryRunner.query(`ALTER TABLE "teacher_subject" ADD CONSTRAINT "PK_d684f35909860165fa3f80fa12b" PRIMARY KEY ("subjectId", "teacherId")`);
        await queryRunner.query(`CREATE INDEX "IDX_d45dd4ef36ee9d722e23b9da31" ON "teacher_subject" ("subjectId") `);
        await queryRunner.query(`CREATE INDEX "IDX_22041399178113c9f08915f65a" ON "teacher_subject" ("teacherId") `);
        await queryRunner.query(`ALTER TABLE "teacher_subject" ADD CONSTRAINT "FK_d45dd4ef36ee9d722e23b9da312" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "teacher_subject" ADD CONSTRAINT "FK_22041399178113c9f08915f65af" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teacher_subject" DROP CONSTRAINT "FK_22041399178113c9f08915f65af"`);
        await queryRunner.query(`ALTER TABLE "teacher_subject" DROP CONSTRAINT "FK_d45dd4ef36ee9d722e23b9da312"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_22041399178113c9f08915f65a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d45dd4ef36ee9d722e23b9da31"`);
        await queryRunner.query(`ALTER TABLE "teacher_subject" DROP CONSTRAINT "PK_d684f35909860165fa3f80fa12b"`);
        await queryRunner.query(`ALTER TABLE "teacher_subject" ADD CONSTRAINT "PK_d45dd4ef36ee9d722e23b9da312" PRIMARY KEY ("subjectId")`);
        await queryRunner.query(`ALTER TABLE "teacher_subject" DROP COLUMN "teacherId"`);
        await queryRunner.query(`ALTER TABLE "teacher_subject" DROP CONSTRAINT "PK_d45dd4ef36ee9d722e23b9da312"`);
        await queryRunner.query(`ALTER TABLE "teacher_subject" DROP COLUMN "subjectId"`);
        await queryRunner.query(`ALTER TABLE "teacher_subject" ADD "teacher_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "teacher_subject" ADD CONSTRAINT "PK_2a9d30cb4207da7ddf7c109097a" PRIMARY KEY ("teacher_id")`);
        await queryRunner.query(`ALTER TABLE "teacher_subject" ADD "subject_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "teacher_subject" DROP CONSTRAINT "PK_2a9d30cb4207da7ddf7c109097a"`);
        await queryRunner.query(`ALTER TABLE "teacher_subject" ADD CONSTRAINT "PK_63df5db8af0e54ee767aeb623b8" PRIMARY KEY ("subject_id", "teacher_id")`);
        await queryRunner.query(`CREATE INDEX "IDX_2a9d30cb4207da7ddf7c109097" ON "teacher_subject" ("teacher_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_c876c0444684d4812824989ba2" ON "teacher_subject" ("subject_id") `);
        await queryRunner.query(`ALTER TABLE "teacher_subject" ADD CONSTRAINT "FK_2a9d30cb4207da7ddf7c109097a" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "teacher_subject" ADD CONSTRAINT "FK_c876c0444684d4812824989ba2c" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
