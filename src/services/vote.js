import models from "../models";

export default class VoteService {
  static async checkIfUserHasVoted(data) {
    try {
      return await models.votes.findOne({
        where: {
          election_id: data.election_id,
          user_id: data.userId,
        },
      });
    } catch (error) {
      throw error;
    }
  }
  static async checkUserIPAddress(data) {
    try {
      return await models.votes.findOne({
        where: {
          election_id: data.election_id,
          ip_address: data.ipAddress,
        },
      });
    } catch (error) {
      throw error;
    }
  }
  static async userExist(id) {
    try {
      const userExist = await models.users.findOne({
        where: {
          id,
        },
      });
      return userExist;
    } catch (error) {
      throw error;
    }
  }
  static async createAvote(data) {
    try {
      return await models.votes.create(data);
    } catch (error) {
      throw error;
    }
  }
  static async getAllElectionVotes(id) {
    try {
      return await models.votes.findAll({
        where: {
          election_id: id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
  static async getVoteCountsForACandidate(data) {
    try {
      return await models.votes.findAll({
        where: {
          election_id: data.election_id,
          candidate_id: data.candidate_id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
