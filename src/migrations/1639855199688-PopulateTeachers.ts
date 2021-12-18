import {MigrationInterface, QueryRunner} from "typeorm";
import faker from 'faker'
export class PopulateTeachers1639855199688 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        for (let i = 0 ; i < 40 ; i++){
            const teacherName = faker.name.findName();
            await queryRunner.query(`
                INSERT INTO teachers
                (name)
                VALUES ($1)
            `, [teacherName]);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM teachers
        `);
    }

}
