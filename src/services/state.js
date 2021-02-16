import database from "../models";

/**
 * @class Admin
 * @description allows admin user create and check country details
 * @exports Admin
 */
export default class Admin {
  /**
   * @param {string} newState - The state details
   * @returns {object} An instance of the States model class
   */
  static async addState(newState) {
    try {
      return await database.states.create(newState);
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} stateName - The state name
   * @returns {object} An instance of the States model class
   */
  static async checkState(stateName) {
    try {
      const stringState = String(stateName);
      const Name = stringState[0].toUpperCase() + stringState.slice(1).toLowerCase();
      return await database.states.findOne({ where: { name: Name } });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} election_id - The election id details
   * @returns {object} An instance of the States election class
   */
  static async checkElectionId(election_id) {
    try {
      return await database.elections.findOne({ where: { id: election_id } });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @returns {object} An instance of the States model class
   */
  static async getAllStates() {
    try {
      return await database.states.findAll({ });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} id - The state id
   * @returns {object} An instance of the States model class
   */
  static async getState(id) {
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
   * @param {string} id - The state name
   * @returns {object} An instance of the States model class
   */
  static async deleteState(id) {
    try {
      const state = await database.states.findOne({ where: { id } });
      return await state.destroy({ cascade: true });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} id - The old state name
   * @param {string} state - The new state details
   * @returns {object} An instance of the States model class
   */
  static async updateState(id, state) {
    try {
      return await database.states.update(state, {
        where: { id },
        returning: true,
        plain: true
      });
    } catch (err) {
      throw err;
    }
  }
}
