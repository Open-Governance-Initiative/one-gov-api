module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("profiles", [{
      id: "98e0350f-ed09-46b0-83d7-8a135afeaf85",
      first_name: "Davido",
      last_name: "Adeleke",
      profile_picture: "http:/facebook.com",
      user_id: "98e0350f-ed09-46b0-83d7-8a135afeaf84",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: "98e0350f-ed09-46b0-83d7-8a123afeaf84",
      first_name: "Taiwo",
      last_name: "Friday",
      profile_picture: "http:/facebook.com",
      user_id: "fc1f4e85-8e83-4a38-ab1e-8e4da2c6ddbb",
      created_at: new Date(),
      updated_at: new Date(),
    },{
      id: "98e0350f-ad09-46b0-83d7-8a135afeaf84",
      first_name: "ishola",
      last_name: "wizkid",
      profile_picture: "http:/facebook.com",
      user_id: "fc1f4e85-8e83-4a38-ab1e-8e4da2c6dd25",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: "98e0350f-ed09-46b0-83d7-8a135adead84",
      first_name: "Bolaji",
      last_name: "emma",
      profile_picture: "http:/facebook.com",
      user_id: "57af7c29-efb2-434e-9fce-b87c77447aaa",
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

  },
};
