const express = require("express");

const app = express();

require("dotenv").config();

const skillnaavRoute = require("./routes/skillnaavRoute");

app.use(express.json());
app.use("/api/skillnaav", skillnaavRoute);

const port = process.env.PORT || 5000;

const dbConfig = require("./config/dbConfig");

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
