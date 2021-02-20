module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("candidates", [{
      id: "9cbaa746-6e42-453e-91f4-c0de15fb4b9a",
      state_id: "98e0350f-ed09-46b0-83d7-8a135afeaf84",
      election_id: "6cbaa746-6e42-453e-91f4-c0de15fb4b9f",
      name : "Adebola Seun",
      email: "adebola@gmail.com",
      bio: "i am a very fun person",
      cv: "Bsc, Msc, Nysc",
      photo: "http://facebook.com",
      created_at: new Date(),
      updated_at: new Date(),
      
    },
    {
      id: "7cbaa746-6e42-453e-91f4-c0de15fb4b9d",
      state_id: "fc1f4e85-8e83-4a38-ab1e-8e4da2c6ddbb",
      election_id: "7cc6de97-2ed6-4422-9ce2-9ff22cc5e97a",
      name : "Adewale Bola",
      email: "adewale@gmail.com",
      bio: "i am a very smart person",
      cv: "Bsc, Nysc",
      photo: "http://facebook.com",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: "a530e505-937b-4908-9422-7aa57044e85b",
      state_id: "57af7c29-efb2-434e-9fce-b87c77447aaa",
      election_id: "a430e505-937b-4908-9422-7aa57044e85a",
      name : "Okoro Paul",
      email: "okoropapi@gmail.com",
      bio: "i am a very chilled person",
      cv: "Bsc, Msc",
      photo: "http://facebook.com",
      created_at: new Date(),
      updated_at: new Date(),
    },
    { 
      id: "47af7c29-efb2-434e-9fce-b87c77447abb",
      state_id: "015494a8-5115-4e3e-ba84-6d08b9d2e08e",
      election_id: "c375c640-81ff-405a-89a8-460ea2f71755",
      name : "Okonkwo Peter",
      email: "okonkwo@gmail.com",
      bio: "i am a very happy person",
      cv: "Phd, Msc, Nysc",
      photo: "http://facebook.com",
      created_at: new Date(),
      updated_at: new Date(),
    },], 
    {});
  },

  down: async (queryInterface, Sequelize) => {

  },
};
