const express = require("express");
const cors = require("cors");
const programRoutes = require("./routes/programs");
const clientRoutes = require("./routes/clients");
const noteRoutes = require("./routes/notes");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/programs", programRoutes);
app.use("/clients", clientRoutes);
app.use("/notes", noteRoutes);

app.listen(5000, () => {
    console.log("Server started on port:5000!")
});