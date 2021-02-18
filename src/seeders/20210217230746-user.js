const bcrypt = require("bcryptjs");

const password = "12345";
const hash = bcrypt.hashSync(password, 10);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [{
      id: "98e0350f-ed09-46b0-83d7-8a135afeaf84",
      email: "francis@gmail.com",
      username: "iamfrancis",
      nydp_code: "ac5fg",
      password: hash,
      role: "Admin",
      active: true,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: "fc1f4e85-8e83-4a38-ab1e-8e4da2c6ddbb",
      email: "ufuoma@gmail.com",
      username: "bellogo",
      nydp_code: "bd5fg",
      password: hash,
      role: "Admin",
      active: true,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: "fc1f4e85-8e83-4a38-ab1e-8e4da2c6dd25",
      email: "fiyin@gmail.com",
      username: "fiyinsendev",
      nydp_code: "bc5fc",
      password: hash,
      role: "User",
      active: false,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: "57af7c29-efb2-434e-9fce-b87c77447aaa",
      email: "godspower@gmail.com",
      username: "therealgodspower",
      nydp_code: "bc4fg",
      password: hash,
      role: "User",
      active: true,
      created_at: new Date(),
      updated_at: new Date(),
    }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {

  },
};
