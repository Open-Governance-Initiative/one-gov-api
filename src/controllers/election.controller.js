import Admin from "../services/election"
import { validation, validateId } from "../validation/election";

/**
 * @name ElectionController
 * @description performs and handles all election activity
 */

class ElectionController {
  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
  */
  static async addElection(req, res) {
    try {
      const { title, election_date, status } = req.body;
      const { error } = validation(req.body);
      if (error) {
        return res.status(400).json({ status: 400, error: error.message });
      }
      const title_name = title[0].toUpperCase() + title.slice(1).toLowerCase();
      const titleName = await Admin.checkTitle(title_name);
      if (titleName) return res.status(409).json({ status: 409, error: "This title name already exists in the database" });
      const newElection = { title: title_name, election_date, status };
      const createdElection = await Admin.addElection(newElection);
      return res.status(201).json({ status: 201, message: "Election has been added.", data: createdElection, });
    } catch (error) {
      return res.status(500).json({ status: 500, error: "Server error." });
    }
  } 

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
  */
  static async getAllElections(req, res) {
    try {
      const elections = await Admin.getAllElections();
      res.status(200).json({
        status: 200,
        message: "Successfully retrived all Elections.",
        data: elections,
      });
    } catch (error) {
      return res.status(500).json({ status: 500, error, });
    }
  }

   /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async getElectionById(req, res) {
    try {
      const { id } = req.params;
      const { error } = validateId({ id });
      if (error) return res.status(400).json({ status: 400, error: error.message });
      const election = await Admin.getElection(id);
      if (!election) return res.status(404).json({ status: 404, error: "Election not found." });
      return res.status(200).json({
        status: 200,
        message: "Successfully retrived Election.",
        data: election,
      });
    } catch (error) {
      return res.status(404).json({
        status: 404,
        error: "Resource not found."
      });
    }
  }
}

// createElection
// createElectionStates

export default ElectionController;
