import React, { useState } from 'react'
import { Link } from "react-router-dom"

import  { MainDiv, Jooin, Boxes, OtherDiv, BoxContainer } from "../styles/StyledJoin"

function Join() {
    const [name, setName] = useState<string>("")
    const [room, setRoom] = useState<string>("")

    return (
        <OtherDiv>
            <Jooin>🔌  Join 🔌</Jooin>
            <MainDiv>
                <BoxContainer><Boxes placeholder="Name" className="joinInut" type="text" onChange={(event) => setName(event.target.value)} /></BoxContainer>
                <BoxContainer><Boxes placeholder="Room" className="joinInut" type="text" onChange={(event) => setRoom(event.target.value)} /></BoxContainer>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Join Room</button>
                </Link>
            </MainDiv>
        </OtherDiv>
    )
}

export default Join
