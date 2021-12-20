import Joi from 'joi';

export const newExamSchema = Joi.object({
    title: Joi.string().required(),
    category: Joi.string().valid('P1', 'P2', 'P3', '2ch', 'Outras').required(),
    subject: Joi.string().required(),
    teacher: Joi.string().required(),
    link: Joi.string().uri().required()
});
