import {Router} from "express";
import ElectionController from "../controllers/election.controller";

const router = Router();
const { addElection, getAllElections,getElectionById } = ElectionController;
 

router.post("/election", addElection);
router.get("/elections", getAllElections);
router.get("/election/:id", getElectionById);

export default router;