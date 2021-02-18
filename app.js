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

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('inputUser', (data) => {
    // handle logic scoring
    Quiz.findOne({where: {id : data.quizId}})
    .then(quiz => {
      if(quiz.answer === data.answer) {
        socket.emit('scoring', 10)
      } else {
        socket.emit('scoring', -5)
      }
    })
    .catch(err => {
      console.log(err)
    })
  })
})

http.listen(port, () => {
  console.log(`listening to port: ${port}`);
})