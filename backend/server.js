require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productRoute = require("./routes/productRoute");

const app = express();

app.use(express.json());
app.use("/product", productRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server is listning on port ${port}`));
connectDB();
