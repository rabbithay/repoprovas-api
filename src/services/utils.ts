import Joi from 'joi';

export function validateObject({
  object, schema,
}: {object: object, schema: Joi.ObjectSchema<any>}) {
  const validation = schema.validate(object);
  console.log(validation.error)
  return !validation.error;
}
