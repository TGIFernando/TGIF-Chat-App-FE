import React from 'react'

import { SForm, SInput, Button} from "../styles/StyledInput"

function Input({ message, setMessage, sendMessage}: any): any {
    return (
        <SForm>
            <SInput
                type="text"
                placeholder="Type a message..." 
                value={message} 
                onChange={(event) => setMessage(event.target.value)} 
                onKeyPress={event => event.key === "Enter" ? sendMessage(event) : null}/>
            <Button className="sendButton" onClick={(event) => sendMessage(event)}>Send</Button>
        </SForm>
    )
}

export default Input
