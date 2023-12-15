import express from "express";
import { registerUser } from "../Controllers/AuthController.js";
import { loginUser } from "../Controllers/AuthController.js";
import { set } from "mongoose";
const setss = [];
fetch("http://localhost:3000/Sets").then((response) => {
  response.json().then((data) => {
    Object.keys(data[0]).forEach((key) => {
      console.log(data[0][key].id);
    });
  });
});

const router = express.Router();
console.log("rotas");
router.post("/register", registerUser);
router.get("/login", loginUser);
router.get("/sets", loginUser);
export default router;
