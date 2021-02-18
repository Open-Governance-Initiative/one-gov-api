import { Router } from "express";
import UserController from "../controllers/auth.controller";
import Authentication from "../middlewares/checkToken";

const router = Router();
const { checkToken, verifyUserById } = Authentication;
const {
  registerUser, loginUser, updateUserProfile, getUsers
} = UserController;

router.post("/users/signup", registerUser);
router.post("/users/login", loginUser);
router.get("/users", getUsers);

router.patch("/user-profile",checkToken, verifyUserById, updateUserProfile);

module.exports = router;