const express = require("express");
const app = express();
const connectDB = require("./config/db");

//middlewares
app.use(express.json({ extended: false }));

//connect to db
connectDB();

//Define routes
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
