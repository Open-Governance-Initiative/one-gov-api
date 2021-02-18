import { Router } from "express";
import authRoutes from "./authRoutes";
import electionRoutes from "./electionRoutes";
import stateRoutes from "./stateRoutes";
import activateRoutes from "./activateRoutes";

const router = new Router();

router.use("/", authRoutes);
router.use("/", electionRoutes);
router.use("/", stateRoutes);
router.use("/", activateRoutes);

export default router;
