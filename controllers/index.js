const { Quiz } = require('../models')

class Controller {
  static fetchQuiz(req, res, next) {
    Quiz.findAll({
      order: [
        ['id', 'DESC']
      ]
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(({message}) => {
        res.status(500).json(message)
      })
  }
}

module.exports = Controller