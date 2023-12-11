import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import DB from "./db/index.js";

//server
const app = express();

//body-parser
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//MongoBD
DB()
  .then(() => {
    app.listen(8080, () => console.log("Serve ON! http://localhost:8080"));
  })
  .catch((err) => console.log(e));
