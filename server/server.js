const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoutes = require("./src/routes/auth");
const questionary = require("./src/routes/questionary");
const verifyToken = require("./src/routes/validate-token");

dotenv.config();
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to db");

    app.use(express.json());

    app.use("/api/user", authRoutes);

    // this route is protected with token
    app.use("/api/questionary", verifyToken, questionary);

    app.listen(3000, function () {
      console.log("Listening on 3000");
    });
  });
