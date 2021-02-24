import { voteValidation, validateId } from "../validation/vote";
import VoteService from "../services/vote";
/**
 * @name VoteController
 * @description performs and handles all voting actions
 */

class VoteController {
  static async voteACandidate(req, res) {
    const { candidate_id } = req.body;
    const { election_id } = req.params;
    const id = req.decoded.user["id"];
    let ipAddress =
      req.connection.remoteAddress || req.headers["x-forwarded-for"] ;
    try {
      const { error } = voteValidation({
        candidate_id,
        election_id,
      });
      if (error) {
        return res.status(400).json({
          status: "error",
          message: error.message,
        });
      }

      const isExistsIP = await VoteService.checkUserIPAddress({
        ipAddress,
        election_id,
      });
      if (isExistsIP) {
        return res.status(400).json({
          status: "error",
          message: "you can't vote at this time",
        });
      }
      const isAValidUserId = await VoteService.userExist(id);
      if (isAValidUserId) {
        return res.status(400).json({
          status: "error",
          message: "you can't vote at this time",
        });
      }
      const hasVotedInElection = await VoteService.checkIfUserHasVoted({
        id,
        election_id,
      });
      if (hasVotedInElection) {
        return res.status(400).json({
          status: "error",
          message: "you can't vote twice at an election",
        });
      }

      const newVote = {
        candidate_id,
        user_id: id,
        election_id,
        ip_address: data.ipAddress,
      };

      const createdVote = await VoteService.createAvote(newVote);
      return res.status(201).json({
        status: "success",
        message: "user has successfully voted",
        data: createdVote,
      });
    } catch (error) {
      return res.status(500).json({ status: "error", message: error.message });
    }
  }
  static async getAllVotesForAnElection(req, res) {
    const { election_id } = req.params;

    try {
      const { error } = validateId(election_id);
      if (error) {
        return res.status(400).json({
          status: "error",
          message: error.message,
        });
      }

      const electionVotes = await VoteService.getAllElectionVotes(election_id);

      return res.status(200).json({
        status: "success",
        message: "retrieved all votes successfully",
        data: electionVotes,
        count: electionVotes.length,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ status: "error", message: "Server error." });
    }
  }
  static async getCandidateVoteCount(req, res) {
    const { candidate_id } = req.body;
    const { election_id } = req.params;

    try {
      const { error } = validation({
        candidate_id,
        election_id,
      });
      if (error) {
        return res.status(400).json({
          status: "error",
          message: error.message,
        });
      }
      const data = { election_id, candidate_id };
      const candidateVotes = await VoteService.getVoteCountsForACandidate(data);

      return res.status(200).json({
        status: "success",
        message: "retrieved all votes successfully",
        data: candidateVotes,
        count: candidateVotes.length,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ status: "error", message: "Server error." });
    }
  }
}

export default VoteController;
