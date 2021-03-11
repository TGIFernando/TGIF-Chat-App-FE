import React, { useEffect, useState } from 'react'
import queryString from "query-string"
import io from "socket.io-client"
import { MainDiv, Bottom } from "../styles/StyledChat"

import InfoBar from "./InfoBar"
import Input from "./Input"
import Messages from "./Messages"

let socket: any

interface Obj {
    "force new connection" : any;
    "reconnectionAttempts": any; 
    "timeout" : any;                  
    "transports" : any;
}

const Chat: React.FC<any> = ({ location }) => {
    const [name, setName] = useState<any>("")
    const [room, setRoom] = useState<any>("")
    const [message, setMessage] = useState<any>("")
    const [messages, setMessages] = useState<any>([])
    const ENDPOINT: any = "https://tgif-real-time-chat-app.herokuapp.com/"

    useEffect(() => {
        const { name, room } = queryString.parse(location.search)

        var connectionOptions: Obj =  {
            "force new connection" : true,
            "reconnectionAttempts": "Infinity", 
            "timeout" : 10000,                  
            "transports" : ["websocket"]
        };

        socket = io.connect(ENDPOINT, connectionOptions);

        setName(name)
        setRoom(room)

        socket.emit("join", { name: name, room: room }, () => {
            
        })


        return () => {
            socket.emit("disconnect")
            socket.off()
        }

    }, [ENDPOINT, location.search])

    useEffect(() => {
        socket.on("message", (message: any) => {
            setMessages([...messages, message])
        })
    }, [messages])

    const sendMessage = (event: any) => {
        event.preventDefault()
        if(message){
            socket.emit("sendMessage", message, () => setMessage(""))
        }
    }

    return (     
            <MainDiv>
                <InfoBar room={room}/>
                <Messages messages={messages} name={name}/>
                <Bottom>    
                    <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
                </Bottom>
            </MainDiv>            
    )
}

export default Chat
