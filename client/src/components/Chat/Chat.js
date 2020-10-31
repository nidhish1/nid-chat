import React , {useState, useEffect} from 'react' // hook - use state and life cycle methods
import queryString from 'query-string'
import io from 'socket.io-client';

 
let socket;

const Chat =  ({location}) => {

    const [name,setName] = useState(''); // '' is initial valie of nmae
    const [room,setRoom] = useState('');
    const ENDPOINT = 'localhots:5000'
    useEffect (()=> {
        // when components render
        const {name,room} = queryString.parse(location.search)

        socket = io(ENDPOINT)

        setName(name)
        setRoom(room)

        socket.emit('join',{name,room})
     
    },[ENDPOINT,location.search])


    return  (<h1>Chat </h1>)
}



export default Chat