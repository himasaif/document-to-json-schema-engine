const Ajv = require("ajv");

const ajv = new Ajv();

function detectType(value) {
  if (typeof value === "number") return "number";

  if (typeof value === "boolean") return "boolean";

  if (Array.isArray(value)) return "array";

  return "string";
}

const generateSchema = (req, res) => {
  const data = req.body;

  const schema = {
    type: "object",
    properties: {},
    required: [],
  };

  for (const key in data) {
    schema.properties[key] = {
      type: detectType(data[key]),
    };

    schema.required.push(key);
  }

  return res.json(schema);
};

const validateData = (req, res) => {
  const { schema, data } = req.body;

  const validate = ajv.compile(schema);

  const valid = validate(data);

  if (!valid) {
    return res.status(400).json({
      valid: false,
      errors: validate.errors,
    });
  }

  return res.json({
    valid: true,
    message: "Data is valid ✅",
  });
};

module.exports = {
  generateSchema,
  validateData,
};