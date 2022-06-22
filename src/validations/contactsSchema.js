const yup = require("yup");

exports.verifyDataCreate = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
});
