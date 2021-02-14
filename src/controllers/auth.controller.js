/**
 * @name AuthController
 * @description performs and handles all authentication actions
 */

import models from "../models/index";
import bcrypt from "bcryptjs";

class AuthController {
  static async signup(req, res) {
    const { name, email, nydp_code, password } = req.body;
    try {
      // add validation
      //check for existing users
      let salt = await bcrypt.genSalt(10);
      let hashedPassword = await bcrypt.hash(password, salt)
      const newUser = await models.users.create({
        name,
        email,
        nydp_code,
        password: hashedPassword,
      });
      return res.status(201).json({
        status: "success",
        message: "user signup successful",
        data: newUser,
      });
    } catch (error) {
      return res.status(400).json({
        status: "failed",
        message: error.message,
      });
    }
  }
  static async login(req, res) {
    const {} = req.body;
    try {
    } catch (error) {
      return res.status(400).json({
        status: "failed",
        message: error.message,
      });
    }
  }
}

export default AuthController;
