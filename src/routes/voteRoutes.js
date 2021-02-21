import { Router } from "express";
import VoteController from "../controllers/vote.controller";
import Authentication from "../middlewares/checkToken";

const router = Router();

const { checkToken, verifyAdmin } = Authentication;
const {
  voteACandidate,
  getAllVotesForAnElection,
  getCandidateVoteCount,
} = VoteController;

router.get("/votes/:election_id", verifyAdmin, getAllVotesForAnElection);
router.post("/votes/:election_id", checkToken, voteACandidate);
router.get(
  "/votes/candidates/:election_id",
  checkToken,
  verifyAdmin,
  getCandidateVoteCount
);

export default router;
