import UserModel from "../Models/UserModel.js";
import bcrypt, { compareSync } from "bcrypt";
//Registering new User
export const registerUser = async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(password, salt);
  const newUser = new UserModel({
    username: username,
    email: email,
    password: hashPass,
  });
  try {
    console.log("Chegou aq");
    await newUser
      .save()
      .then(() => res.json(newUser))
      .catch((e) => {
        console.log(e);
      });
  } catch (error) {}
};

export const loginUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await UserModel.findOne({
      email: email,
    });
    if (user) {
      const validate = await bcrypt.compare(password, user.password);
      validate
        ? res.status(200).json(user)
        : res.status(400).json("Wrong password");
    } else {
      res.status(404).json("User not exist");
    }
  } catch (error) {}
};

export const sets = async (req, res) => {};
