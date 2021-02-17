import models from "../models";

export default class AuthService {
  static async checkIfUserExists(email, nydp_code) {
    try {
      return await models.users.findOne({
        where: {
          email,
          nydp_code,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  static async createNewUser(data) {
    try {
      return await models.users.create({
        name: data.name,
        email: data.email,
        nydp_code: data.nydp_code,
        role: data.role,
        password: data.hashedPassword,
      });
    } catch (error) {
      throw error;
    }
  }
}
