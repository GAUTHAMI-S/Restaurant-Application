const express = require("express");
const app = express();
const port = 6001 || process.env.PORT;
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();


// username:UserOne
//password: b60DO7ZvHbAehFVp

//middleware
app.use(cors());
app.use(express.json());

//mongodb configuration using mongoose
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster1.hjtzviw.mongodb.net/restaurant-app?retryWrites=true&w=majority&appName=Cluster1`
  )
  .then(console.log("Mongodb successfully connected!!"))
  .catch((error) => console.log(error));

//jwt authentication

app.post("/jwt", async (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "2h",
  });
  res.send({ token });
});

//verify jwt token
//middleware

//import routes here
const menuRoutes = require("./api/routes/menuRoutes");
const cartRoutes = require("./api/routes/cartRoutes");
const userRoutes = require("./api/routes/userRoutes");

app.use("/menu", menuRoutes);
app.use("/carts", cartRoutes);
app.use("/users", userRoutes);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
