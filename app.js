const express = require("express")
const app = express()
const port = process.env.PORT || 3000
//router belum digunakan makanya di command terlebih dahulu
// const router = require("./routers/index")
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
//router belum digunakan makanya di command terlebih dahulu
// app.use("/", router)

io.on('connection', (socket) => {
  console.log('a user connected');

  // socket.on('userInput', (input, questionId) => {
  //   // kasih kondisi pengecekan disini yang nerima param
  //   socket.emit('serverResponse', (input, questionId))
  // })
})

http.listen(port, () => {
  console.log(`listening to port: ${port}`);
})