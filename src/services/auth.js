import database from "../models";

/**
 * @class User
 * @description User services
 * @exports User
 */
export default class User {
  /**
   * @param {string} username - The user name
   * @returns {object} - An instance of the Users model class
   */
  static async usernameExist(username) {
    try {
      const usernameExist = await database.users.findOne({
        where: {
          username
        }
      });
      return usernameExist;
    } catch (error) {
      throw error;
    }
  }
  /**
   * @param {string} id - The user id
   * @returns {object} - An instance of the Users model class
   */

  static async userExist(id) {
    try {
      const userExist = await database.users.findOne({
        where: {
          id
        }
      });
      return userExist;
    } catch (error) {
      throw error;
    }
  }

  /**
   * @returns {object} An instance of the comment class
   */
  static async getAllUsers() {
    try {
      //
      return await database.users.findAll({ });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {string} email  - The user email
   * @returns {object} - An instance of the Users model class
   */
  static async emailExist(email) {
    try {
      return await database.users.findOne({
        where: {
          email
        }
      });
    } catch (error) {
      throw error;
    }
  }

  /**
   * @param {object} newUser - The user details
   * @returns {object} - An instance of the Users model class
   */
  static async createUser(newUser) {
    try {
      const createUser = await database.users.create(newUser);
      const userToUpdate = await database.users.findOne({
        where: {
          id: createUser.id
        }
      });
      if (userToUpdate) {
        const newProfile = {
          user_id: userToUpdate.id
        };
        const user = await database.profiles.create(newProfile);
        return createUser;
      }
    } catch (error) {
      throw error;
    }
  }

  /**
   * @param {string} id - The user id
   * @param {string} profile - The user profile details
   * @returns {object} - An instance of the Profile model class
   */
  static async updateUserProfile(id, profile) {
    try {
      return await database.profiles.update(profile, {
        where: { user_id: id },
        returning: true,
        plain: true
      });
    } catch (error) {
      throw error;
    }
  }
}
