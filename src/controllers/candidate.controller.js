import Admin from "../services/candidate"
import { validation, validateId } from "../validation/candidate";


/**
 * @name CandidateController
 * @description
 */

class CandidateController {
    /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async addCandidate(req, res) {
    try {
      const { name, email } = req.body;
      const { state_id } = req.params;
      const { error } = validation({ name, email, state_id });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const statesId = await Admin.checkStateId(state_id);
      if (!statesId) return res.status(404).json({ status: 404, error: "States does not exist in the database." });
      const candidateName = name[0].toUpperCase() + name.slice(1).toLowerCase();
      const newCandidate = { name: candidateName, email, state_id, election_id: statesId.election_id };
      const createdCandidate = await Admin.addCandidate(newCandidate);
      return res.status(201).json({ status: 201, message: "A Candidate has been added.", data: createdCandidate, });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

    /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async listCandidates(req, res) {
    try {
      const candidates = await Admin.getAllCandidates();
      res.status(200).json({
        status: 200,
        message: "Successfully retrived all Candidates",
        data: candidates,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error,
      });
    }
  }

    /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async getCandidate(req, res) {
    try {
      const { id } = req.params;
      const { error } = validateId({ id });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const candidates = await Admin.getCandidate(id);
      if (!candidates) return res.status(404).json({ status: 404, error: "Candidates not found." });
      return res.status(200).json({
        status: 200,
        message: "Successfully retrived candidates",
        data: candidates,
      });
    } catch (error) {
      return res.status(404).json({
        status: 404,
        error: "Resource not found."
      });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async deleteCandidate(req, res) {
    const { id } = req.params;
    try {
      const { error } = validateId({ id });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const Candidate = await Admin.getCandidate(id);
      if (!Candidate) return res.status(404).json({ status: 404, error: "Candidate not found." });
      await Admin.deleteCandidate(id);
      return res.status(200).json({
        status: 200,
        message: "Successfully Deleted Candidate.",
      });
    } catch (error) {
      return res.status(404).json({
        status: 404,
        error: "Resource not found.",
      });
    }
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async updateCandidate(req, res) {
    try {
      const { id } = req.params;
      const {
        name
      } = req.body;
      const { error } = validateId({ id });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const CandidateId = await Admin.getCandidate(id);
      if (!CandidateId) return res.status(404).json({ status: 404, error: "Candidates not found." });
      let newname;
      if (name) {
        newname = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        req.body.name = newname;
      }
      const Candidate = await Admin.updateCandidate(id, req.body);
      return res.status(200).json({
        status: 200,
        message: "Successfully updated Candidates",
        data: Candidate[1],
      });
    } catch (error) {
      return res.status(404).json({ status: 404, error: "Resource not found.", });
    }
  }
  }

export default CandidateController;