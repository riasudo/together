const express = require("express");
const cors = require("cors");
const programRoutes = require("./routes/programs");
const clientRoutes = require("./routes/clients");
const app = express();

app.use(cors());
app.use(express.json());


app.use("/programs", programRoutes);
app.use("/clients", clientRoutes);

app.listen(5000, () => {
    console.log("Server started on port:5000!")
});