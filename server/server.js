const express = require("express");
const app = express();
const cors = require("cors");
const programRoutes = require("./routes/programs");

app.use(express.json());

app.use(cors());

app.use("/programs", programRoutes);