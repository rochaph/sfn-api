import Joi, { Schema } from "joi";

export const validaIdRequired: Schema = Joi.object().keys({
  id: Joi.number().required(),
});
