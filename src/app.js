const express = require("express");
const cors = require("cors");

const schemaRoutes = require("./routes/schemaRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/schema", schemaRoutes);

app.get("/", (req, res) => {
  res.send("Smart JSON Schema API 🚀");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});