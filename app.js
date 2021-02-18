require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const router = require("./routers/index")
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/", router)

io.on('connection', (socket) => {
    console.log('a user connected');
})

http.listen(port, () => {
    console.log(`listening to port: ${port}`);
})