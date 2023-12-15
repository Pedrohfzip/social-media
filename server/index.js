import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import AuthRoute from "./Routes/AuthRoute.js";

const uri =
  "mongodb+srv://picanha:123@cluster0.n1plwfm.mongodb.net/SocialMedia?retryWrites=true&w=majority";
//routes
const app = express();

//MiddleWare body-parser
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//server
mongoose
  .connect(uri)
  .then(() => {
    console.log("conetcado ao banco");
    app.listen(8080, () => console.log("Serve ON! http://localhost:8080"));
  })
  .catch((e) => {
    console.log(e);
  });
//Route Auth   { http://localhost/auth/ }
app.use("/auth", AuthRoute);
