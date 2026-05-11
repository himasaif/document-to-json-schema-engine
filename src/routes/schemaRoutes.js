const express = require("express");

const router = express.Router();

const {
  generateSchema,
  validateData,
} = require("../controllers/schemaController");

router.post("/generate", generateSchema);

router.post("/validate", validateData);

module.exports = router;