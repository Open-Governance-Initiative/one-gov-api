import {Router} from "express";
import StateController from "../controllers/state.controller";
import Authentication from "../middlewares/checkToken";

const router = Router();

const { checkToken, verifyAdmin } = Authentication;
const { 
    addStateToElection, getState, listStates, deleteState, updateState
} = StateController;
 
router.get("/state/:id", getState);
router.get("/states", listStates);
router.post("/state/:election_id", checkToken, verifyAdmin, addStateToElection);
router.delete("/state/:id", checkToken, verifyAdmin, deleteState);
router.patch("/state/:id", checkToken, verifyAdmin, updateState);

export default router;