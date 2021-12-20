import {MigrationInterface, QueryRunner} from "typeorm";

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const titles = ["2018.1", "2018.2", "2019.1", "2019.2", "2020.1", "2020.2", "2021.1", "2021.2"]
const categories = ["P1", "P2", "P3", "2ch", "Outras"]
const link = "https://drive.google.com/file/d/1U2d7WPMwlP3xCqSSATiQdMGY8nxxNCqy/view"

export class PopulateExams1639974539826 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const teacherSubjectIdsList: {subjectId: number, teacherId: number}[] = await queryRunner.query(`
            SELECT * FROM teacher_subject;
        `) 

        for ( let i = 0 ; i < teacherSubjectIdsList.length ; i++ ) {
            const subjectId = teacherSubjectIdsList[i]?.subjectId;
            const teacherId = teacherSubjectIdsList[i]?.teacherId;
            const examQuantity = getRandomInt(2, 10)   
                     
            for (let j = 0; j < examQuantity ; j++){
                const category = categories[getRandomInt(0,4)]
                const title = titles[getRandomInt(0,7)]

                await queryRunner.query(`
                    INSERT INTO exams
                    ("subjectId", "teacherId", title, link, category)
                    VALUES ($1, $2, $3, $4, $5)
                `, [subjectId, teacherId, title, link, category]);
            }
        } 

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM exams
        `);
    }

}
