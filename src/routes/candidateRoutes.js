import {Router} from "express";
import CandidateController from "../controllers/candidate.controller";
import Authentication from "../middlewares/checkToken";

const router = Router();

const { checkToken, verifyAdmin } = Authentication;
const { 
    addCandidate, getCandidate, listCandidates, deleteCandidate, updateCandidate
} = CandidateController;
 
router.get("/candidate/:id", getCandidate);
router.get("/candidates", listCandidates);
router.post("/admin/candidate/:state_id", checkToken, verifyAdmin, addCandidate);
router.delete("/admin/candidate/:id", checkToken, verifyAdmin, deleteCandidate);
router.patch("/admin/candidate/:id", checkToken, verifyAdmin, updateCandidate);

export default router;