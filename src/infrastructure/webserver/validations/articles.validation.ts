import Joi, { Schema } from "joi";

export const validateGetAllArticles: Schema = Joi.object().keys({
  start: Joi.number().required(),
  limit: Joi.number().required(),
  newest: Joi.boolean().default(true),
});

export const validateCreateArticle: Schema = Joi.object().keys({
  id: Joi.forbidden(),
  featured: Joi.boolean().required(),
  title: Joi.string().required(),
  url: Joi.string().required(),
  imageUrl: Joi.string().required(),
  newsSite: Joi.string().required(),
  summary: Joi.string().required(),
  publishedAt: Joi.string().required(),
  launches: Joi.array().items(
    Joi.object({
      id: Joi.string().required(),
      provider: Joi.string().required(),
    })
  ),
  events: Joi.array().items(
    Joi.object({
      id: Joi.string().required(),
      provider: Joi.string().required(),
    })
  ),
});

export const validateUpdateArticle: Schema = Joi.object().keys({
  id: Joi.forbidden(),
  featured: Joi.boolean(),
  title: Joi.string(),
  url: Joi.string(),
  imageUrl: Joi.string(),
  newsSite: Joi.string(),
  summary: Joi.string(),
  publishedAt: Joi.string(),
  launches: Joi.array().items(
    Joi.object({
      id: Joi.string(),
      provider: Joi.string(),
    })
  ),
  events: Joi.array().items(
    Joi.object({
      id: Joi.string(),
      provider: Joi.string(),
    })
  ),
});
