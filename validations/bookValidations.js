
import Joi from "joi";

const bookCreate = Joi.object({
  title: Joi.string().min(2).required(),
  ImageUrl: Joi.string(),
  author: Joi.string().required(),
  publishedDate: Joi.date().iso().required(),
  description: Joi.string().min(25).required(),
  price: Joi.string()
    .pattern(/^(?:[1-9]\d*|0)?(?:\.\d+)?\s?(?:[A-Za-z]{3})$/)
    .required(),
});
class BookValidation {
  static verifyCreate = (req, res, next) => {
    const { error } = bookCreate.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: error.details[0].message.replace(/["'`]+/g, ""),
      });
    }
    next();
  };
}
export default BookValidation;
