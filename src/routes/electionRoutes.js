import {Router} from "express";
import ElectionController from "../controllers/election.controller";
import Authentication from "../middlewares/checkToken";

const router = Router();

const { checkToken, verifyAdmin } = Authentication;
const { addElection, getAllElections,getElectionById } = ElectionController;
 
router.get("/elections", getAllElections);
router.get("/election/:id", getElectionById);
router.post("admin/election", checkToken, verifyAdmin,  addElection);


export default router;