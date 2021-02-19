const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const router = require("./routers/index")
const http = require('http').Server(app)
const io = require('socket.io')(http)
const {Quiz} = require('./models')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/", router)

let user = []

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('fetchQuiz', (data) => {
    Quiz.findOne({where: {id : +data}})
    .then(quiz => {
      io.emit('Quiz', quiz)
    })
    .catch(err => {
      console.log(err)
    })
  })

  socket.on('login', (data) => {
    user.push(data)
  })

  socket.on('inputUser', (payload) => {
    Quiz.findOne({where: {id : payload.quizId}})
    .then(quiz => {
      if(quiz.answer === payload.answer) {
        let quizId = payload.quizId + 1
        socket.emit('scoring', 10)
        return Quiz.findOne({where: {id: quizId}})
      } else {
        let quizId = payload.quizId + 1
        console.log(quizId);
        socket.emit('scoring', -5)
        return Quiz.findOne({where: {id: quizId}})
      }
    })
    .then(nextQuiz => {
      io.emit('nextQuiz', nextQuiz)
    })
    .catch(err => {
      console.log(err)
    })
  })
})

http.listen(port, () => {
  console.log(`listening to port: ${port}`);
})