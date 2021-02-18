module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("elections", [{
      id: "6cbaa746-6e42-453e-91f4-c0de15fb4b9f",
      title: "Presidential",
      date_created: new Date(),
      election_date: new Date(),
      status: "canceled",
      created_at: new Date(),
      updated_at: new Date(),
      
    },
    {
      id: "7cc6de97-2ed6-4422-9ce2-9ff22cc5e97a",
      title: "Senate",
      date_created: new Date(),
      election_date: new Date(),
      status: "postponed",
      created_at: new Date(),
      updated_at: new Date(),
      
    },
    {
      id: "a430e505-937b-4908-9422-7aa57044e85a",
      title: "Governorship",
      date_created: new Date(),
      election_date: new Date(),
      status: "ended",
      created_at: new Date(),
      updated_at: new Date(),
      
    },
    { 
      id: "c375c640-81ff-405a-89a8-460ea2f71755",
      title: "Chancellor",
      date_created: new Date(),
      election_date: new Date(),
      status: "upcoming",
      created_at: new Date(),
      updated_at: new Date(),
    },], 
    {});
  },

  down: async (queryInterface, Sequelize) => {

  },
};
