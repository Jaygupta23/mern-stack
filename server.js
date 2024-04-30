const express = require("express");
const app = express();
const router = require("./routes/Auth-Routers");
const connectDb = require("./utils/db");
require("dotenv").config()

app.use(express.json());
app.use("/api/auth", router);

const PORT = 5000;

connectDb() 

  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
