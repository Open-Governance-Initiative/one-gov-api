import database from "../models";

/**
 * @class Admin
 * @description allows admin user create and check country details
 * @exports Admin
 */
export default class Admin {
  /**
   * @param {string} newCandidate - The candidate details
   * @returns {object} An instance of the candidates model class
   */
  static async addCandidate(newCandidate) {
    try {
      return await database.candidates.create(newCandidate);
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} id - The state id
   * @returns {object} An instance of the states model class
   */
  static async checkStateId(id) {
    try {
      return await database.states.findOne({ 
        where: {
          id
        }
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @returns {object} An instance of the candidates model class
   */
  static async getAllCandidates() {
    try {
      return await database.candidates.findAll({ });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} id - The candidate id
   * @returns {object} An instance of the candidates model class
   */
  static async getCandidate(id) {
    try {
      return await database.candidates.findOne({
        where: {
          id
        }
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} id - The candidate name
   * @returns {object} An instance of the candidates model class
   */
  static async deleteCandidate(id) {
    try {
      const candidate = await database.candidates.findOne({ where: { id } });
      return await candidate.destroy({ cascade: true });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} id - The old candidate name
   * @param {string} candidate - The new candidate details
   * @returns {object} An instance of the candidates model class
   */
  static async updateCandidate(id, candidate) {
    try {
      return await database.candidates.update(candidate, {
        where: { id },
        returning: true,
        plain: true
      });
    } catch (err) {
      throw err;
    }
  }
}
