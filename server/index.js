const express = require ('express');
const socketio = require ('socket.io');
const http = require ('http')
const router  = require('./router')
const cors  = require('cors')

const PORT = process.env.PORT || 5000


const app = express();

app.use(cors)
const server = http.createServer(app);
const io = socketio(server)


// socket io code
io.on( 'connection' , (socket)=> {
    console.log("New Connections");
    socket.on ('join',({name,room}) => {
        console.log(name,room)
    })
    socket.on('disconnect', ()=> {
        console.log("User left");
    })
});

app.use(router)

server.listen(PORT , () => console.log(`server has started ${PORT}`))


