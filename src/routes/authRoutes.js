import AuthController from "../controllers/auth.controller";
import {Router} from "express";
const router = Router()  

router.post("/signup", AuthController.signup);

module.exports = router;