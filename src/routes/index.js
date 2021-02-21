import { Router } from "express";
import authRoutes from "./authRoutes";
import electionRoutes from "./electionRoutes";
import stateRoutes from "./stateRoutes";
import activateRoutes from "./activateRoutes";
import candidateRoutes from "./candidateRoutes";
import voteRoutes from "./voteRoutes";

const router = new Router();

router.use("/", authRoutes);
router.use("/", electionRoutes);
router.use("/", stateRoutes);
router.use("/", activateRoutes);
router.use("/", candidateRoutes);
router.use("/", voteRoutes);

export default router;
