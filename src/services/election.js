import database from "../models";

/**
 * @class Admin
 * @description allows admin user create and check weed details
 * @exports Admin
 */
export default class Admin {
  /**
   * @param {string} nelection - The election details
   * @returns {object} An instance of the elections model class
   */
  static async addElection(election) {
    try {
      return await database.elections.create(election);
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} titleName - The election title name
   * @returns {object} An instance of the Elections model class
   */
  static async checkTitle(titleName) {
    try {
      const title = String(titleName);
      const Name = title[0].toUpperCase() + title.slice(1).toLowerCase();
      return await database.elections.findOne({ where: { title: Name } });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @returns {object} An instance of the Elections model class
   */
  static async getAllElections() {
    try {
      return await database.elections.findAll({ });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} id - The weed id
   * @returns {object} An instance of the Elections model class
   */
  static async getElection(id) {
    try {
      return await database.elections.findOne({
        where: {
          id
        }
      });
    } catch (err) {
      throw err;
    }
  }

 

}
