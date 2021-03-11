import React from 'react'

import onlineIcon from "../icons/onlineIcon.png"
import closeIcon from "../icons/closeIcon.png"
import { MainDiv, Room, RoomDiv, XDiv, DotImg } from "../styles/StyledInfoBar"

function InfoBar({room}: any) {
    return (
        <MainDiv>
            <RoomDiv>
                <DotImg src={onlineIcon} alt="online"/>
                <Room>{room}</Room>
            </RoomDiv>
            <XDiv>
                <a href="/"><DotImg src={closeIcon} alt="close"/></a>
            </XDiv>
        </MainDiv>
    )
}

export default InfoBar