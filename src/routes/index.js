import { Router } from "express";
import authRoutes from "./authRoutes";
import electionRoutes from "./electionRoutes";
import stateRoutes from "./stateRoutes";

const router = new Router();

router.use("/auth", authRoutes);
router.use("/", electionRoutes);
router.use("/", stateRoutes);

export default router;
