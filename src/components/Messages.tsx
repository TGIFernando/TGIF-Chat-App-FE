import Message from "./Message"

import { MainDiv } from "../styles/StyledMessage"


const Messages: React.FC<any> = ({ messages, name }) => {
    return (
        <MainDiv>
                {messages.map((message: any, i: any) => <div key={i}><Message message={message} name={name}/></div>)}
        </MainDiv>
    )
}

export default Messages
