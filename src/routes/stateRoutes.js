import {Router} from "express";
import StateController from "../controllers/state.controller";

const router = Router();
const { 
    addStateToElection, getState, listStates, deleteState, updateState
} = StateController;
 

router.post("/state/:election_id", addStateToElection);
router.get("/state/:id", getState);
router.get("/states", listStates);
router.delete("/state/:id", deleteState);
router.put("/state/:id", updateState);

export default router;