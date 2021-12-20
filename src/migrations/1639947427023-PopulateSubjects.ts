import {MigrationInterface, QueryRunner} from "typeorm";

const subjects = [
    [
        "Cálculo I", 
        "Física I", 
        "Geometria Analítica", 
        "Processamentos de dados I", 
        "Química Geral", 
        "Metodologia da Pesquisa",
    ], [
        "Cálculo II", 
        "Física II", 
        "Algebra Linear", 
        "Processamentos de dados II", 
        "Fundamentos da filosofia", 
        "Ética e Sustentabilidade",
    ], [
        "Cálculo III", 
        "Física III", 
        "Métodos Estatísticos", 
        "Cáculo Numérico", 
        "Desenho Técnico I", 
    ], [
        "Cálculo IV", 
        "Física IV", 
        "Mecânica dos Sólidos", 
        "Fenômenos de Transporte",         
    ], [
        "Eletromagnetismo", 
        "Eletricidade", 
        "Mecânica dos Sólidos II",         
    ], [
        "Termodinâmica", 
        "Dinâmica dos Sólidos", 
        "Treansferência de Calor e Massa",
    ], 
]

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  

export class PopulateSubjects1639947427023 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const [resolveCourseId] = await queryRunner.query(`
            INSERT INTO courses
            (title)
            VALUES ('Bacharelado em Ciências Exatas e Tecnológicas')
            RETURNING id
        `)

        const courseId: number = resolveCourseId.id;
        
        let subjectIdList: {id: number}[];
        for ( let i = 0 ; i < subjects.length ; i++ ) {
            const semesterSubjects = subjects[i];
            for ( let j = 0 ; j < semesterSubjects.length ; j ++) {
                const subjectTitle = semesterSubjects[j]
                subjectIdList = await queryRunner.query(`
                INSERT INTO subjects
                ("courseId", title, semester)
                VALUES ($1, $2, $3)
                RETURNING id
            `, [courseId, subjectTitle, i+1]);
            }
        }

        const teacherIdList: {id: number}[] = await queryRunner.query(`
            SELECT id FROM teachers;
        `)

        for ( let i = 0 ; i < subjectIdList.length ; i++ ) {
            const subjectId = subjectIdList[i]?.id;
            const teacherQuantity = getRandomInt(1, 4)
            for (let j = 0; j < teacherQuantity ; j++){                
                const randomTeacherPosition = getRandomInt(0, teacherIdList.length - 1);
                const teacherId = teacherIdList[randomTeacherPosition]?.id;
                await queryRunner.query(`
                    INSERT INTO teacher_subject
                    ("subjectId", "teacherId")
                    VALUES ($1, $2)
                `, [subjectId, teacherId]);
            }
        }        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM teacher_subject
        `);
        await queryRunner.query(`
            DELETE FROM subjects
        `);
        await queryRunner.query(`
            DELETE FROM courses
        `);
    }

}
