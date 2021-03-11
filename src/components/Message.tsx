import React from 'react'
import ReactEmoji from "react-emoji"

import { SenderDiv, SenderBubble, RecDiv, RecBubble, P1, P2 } from "../styles/StyledMessage"

const Message: React.FC<any> = ({message: { user, text }, name}) => {
    let isSentByCurrentUser = false

    const trimmedName = name.trim().toLowerCase()

    if(user === trimmedName) {
        isSentByCurrentUser = true
    }

    return (
        isSentByCurrentUser
        ?(
            <SenderDiv> 
                <SenderBubble>
                    <p>{ReactEmoji.emojify(text)}</p>
                </SenderBubble>
                <P1>{trimmedName}</P1>
            </SenderDiv>
        )
        : (
            <RecDiv>
                <RecBubble>
                    <p>{ReactEmoji.emojify(text)}</p>
                </RecBubble>
                <P2>{user}</P2>
            </RecDiv>
        )
    )
}

export default Message
