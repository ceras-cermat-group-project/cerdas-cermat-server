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
       question: 'https://i.ibb.co/8mySRw1/bkqfHAk.jpg',
       answer: 'edison',
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
      question: 'https://i.ibb.co/phCytjT/oUA9EuU.jpg',
      answer: 'obama',
      createdAt: new Date(),
       updatedAt: new Date(),
    }
    ,
     {
      question: 'https://i.ibb.co/mC7RNZ9/Rffoc1l.jpg',
      answer: 'tukul',
      createdAt: new Date(),
       updatedAt: new Date(),
    },
    {
     question: 'https://i.ibb.co/FzXX394/rRB6eDN.jpg',
     answer: 'nanas',
     createdAt: new Date(),
      updatedAt: new Date(),
   },
    {
     question: 'https://i.ibb.co/GFdJP7K/soalcandiborobudur.jpg',
     answer: 'gunadharma',
     createdAt: new Date(),
      updatedAt: new Date(),
   },
   {
    question: 'https://i.ibb.co/80C5X8v/qwqwqwqwqw.jpg',
    answer: '44',
    createdAt: new Date(),
     updatedAt: new Date(),
  },
  {
   question: 'https://i.ibb.co/qmwN6C1/dfgdfgfdfgg.jpg',
   answer: '49',
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
