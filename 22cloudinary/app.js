const express = require("express");
const uploadRoute = require("./routes/upload");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", uploadRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
