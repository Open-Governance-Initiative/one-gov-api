/**
 * @name AuthController
 * @description performs and handles all authentication actions
 */

import { validateLogin, validateUserSignup } from "../validation/auth";
import AuthService from "../services/auth";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

class AuthController {
  static async signup(req, res) {
    const { name, email, nydp_code, password, role } = req.body;
    try {
      // add validation
      const { error } = validateUserSignup({
        name,
        email,
        nydp_code,
        role,
        password,
      });
      if (error) {
        console.log(error);
        throw new Error(error);
      }
      await AuthService.checkIfUserExists(email, nydp_code);

      let salt = await bcrypt.genSalt(10);
      let hashedPassword = await bcrypt.hash(password, salt);
      let userData = {
        name,
        email,
        nydp_code,
        role,
        hashedPassword,
      };
      const newUser = await AuthService.createNewUser(userData);
      jwt.sign(
        {
          email: newUser.email,
          nydp_code: newUser.nydp_code,
          userId: newUser._id,
          role: newUser.role,
        },
        process.env.AUTHKEY,
        { expiresIn: "72h" },
        (err, token) => {
          if (err) {
            throw new Error(err);
          }
          if (token) {
            return res.status(201).json({
              status: "success",
              message: "user signup successful",
              data: newUser,
              token,
            });
          }
        }
      );
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: "failed",
        message: error.message,
      });
    }
  }
  static async login(req, res) {
    const { email, password, nydp_code } = req.body;
    try {
      const { error } = validateLogin({ email, password, nydp_code });

      if (error) {
        throw new Error(error);
      }
      const userExists = await AuthService.checkIfUserExists(email, nydp_code);

      if (!userExists) {
        throw new Error("user doesn't exists");
      }

      const match = await bcrypt.compare(password, userExists.password);
      if (!match) {
        throw new Error("invalid password");
      }
      jwt.sign(
        {
          email: userExists.email,
          role: userExists.role,
          userId: userExists._id,
          nydp_code: userExists.nydp_code,
        },
        process.env.AUTHKEY,
        { expiresIn: "72h" },
        (err, token) => {
          if (err) {
            throw new Error(err);
          } else {
            return res.status(200).json({
              status: "success",
              message: "login successful",
              data: userExists,
              token,
            });
          }
        }
      );
    } catch (error) {
      return res.status(400).json({
        status: "failed",
        message: error.message,
      });
    }
  }
}

export default AuthController;
