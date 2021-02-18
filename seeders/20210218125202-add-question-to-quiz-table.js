'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Quizzes', [{
       question: 'https://i.imgur.com/yZAGK5X.jpg',
       answer: 'obama',
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
      question: 'Pergi ke kota naik angkutan , Tidak lupa berkunjung ke balai kota, Punya sisik, tapi bukan ikan, Punya mahkota, tapi bukan raja - Jawaban : nanas',
      answer: 'nanas',
      createdAt: new Date(),
       updatedAt: new Date(),
    },
    {
      question: 'nama instructur yang tidak ngebreifing LC',
      answer: 'rahasia',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkInsert('Quizzes', null, {})
  }
};
