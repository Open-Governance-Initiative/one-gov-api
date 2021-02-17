import Admin from "../services/state"
import { validation, validateId } from "../validation/state";


/**
 * @name StateController
 * @description
 */

class StateController {
    /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async addStateToElection(req, res) {
    try {
      const { name } = req.body;
      const { election_id } = req.params;
      const { error } = validation({ name, election_id });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const stateId = await Admin.checkElectionId(election_id);
      if (!stateId) return res.status(404).json({ status: 404, error: "Election does not exist in the database." });
      const stateName = name[0].toUpperCase() + name.slice(1).toLowerCase();
      const state = await Admin.checkState(stateName);
      console.log(stateName);
      if (state) return res.status(409).json({ status: 409, error: "This state already exists in the database." });
      const newState = { name: stateName, election_id };
      console.log(newState);
      const createdState = await Admin.addState(newState);
      return res.status(201).json({ status: 201, message: "A state has been added.", data: createdState, });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  }

    /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async listStates(req, res) {
    try {
      const states = await Admin.getAllStates();
      res.status(200).json({
        status: 200,
        message: "Successfully retrived all States",
        data: states,
      });
    } catch (error) {
      console.log(error);
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
  static async getState(req, res) {
    try {
      const { id } = req.params;
      const { error } = validateId({ id });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const state = await Admin.getState(id);
      if (!state) return res.status(404).json({ status: 404, error: "State not found." });
      return res.status(200).json({
        status: 200,
        message: "Successfully retrived state",
        data: state,
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
  static async deleteState(req, res) {
    const { id } = req.params;
    try {
      const { error } = validateId({ id });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const state = await Admin.getState(id);
      if (!state) return res.status(404).json({ status: 404, error: "State not found" });
      await Admin.deleteState(id);
      return res.status(200).json({
        status: 200,
        message: "Successfully Deleted state.",
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
  static async updateState(req, res) {
    try {
      const { id } = req.params;
      const {
        name
      } = req.body;
      const { error } = validateId({ id });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const stateId = await Admin.getState(id);
      if (!stateId) return res.status(404).json({ status: 404, error: "State not found." });
      let newname;
      if (name) {
        newname = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        req.body.name = newname;
      }
      const state = await Admin.updateState(id, req.body);
      return res.status(200).json({
        status: 200,
        message: "Successfully updated State",
        data: state[1],
      });
    } catch (error) {
      return res.status(404).json({ status: 404, error: "Resource not found.", });
    }
  }
  }

export default StateController;
  