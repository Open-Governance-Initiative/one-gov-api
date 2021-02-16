module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("states", [{
      id: "98e0350f-ed09-46b0-83d7-8a135afeaf84",
      election_id: "6cbaa746-6e42-453e-91f4-c0de15fb4b9a",
      name: "Lagos",
      date_created: new Date(),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: "fc1f4e85-8e83-4a38-ab1e-8e4da2c6ddbb",
      election_id: "7cc6de97-2ed6-4422-9ce2-9ff22cc5e97f",
      name: "Anambra",
      date_created: new Date(),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: "57af7c29-efb2-434e-9fce-b87c77447aaa",
      election_id: "a430e505-937b-4908-9422-7aa57044e85c",
      name: "Edo",
      date_created: new Date(),
      created_at: new Date(),
      updated_at: new Date(),
    },
    { 
      id: "015494a8-5115-4e3e-ba84-6d08b9d2e08e",
      election_id: "c375c640-81ff-405a-89a8-460ea2f71756",
      name: "Kano",
      date_created: new Date(),
      created_at: new Date(),
      updated_at: new Date(),
    },], 
    {});
  },

  down: async (queryInterface, Sequelize) => {

  },
};
