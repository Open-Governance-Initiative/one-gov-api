import { Router } from "express";
import AdminController from "../controllers/admin";
import Authentication from "../middlewares/checkToken";

const router = Router();
const { ActivateUser, DeActivateUser } = AdminController;
const { checkToken, verifyAdmin } = Authentication;

router.patch("/admin/activate-user/:id", checkToken, verifyAdmin, ActivateUser);
router.patch("/admin/deactivate-user/:id", checkToken, verifyAdmin, DeActivateUser);

export default router;
