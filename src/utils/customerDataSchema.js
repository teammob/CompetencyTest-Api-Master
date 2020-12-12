import joi from 'joi';

const customerDataSchema = joi.object().keys({
  name: joi.string().required(),
  age: joi
    .number()
    .min(1)
    .required(),
  sex: joi
    .string()
    .valid('Female', 'Male')
    .required(),
  country: joi.string().required()
});

export default customerDataSchema;
