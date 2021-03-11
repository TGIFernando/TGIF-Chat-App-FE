import styled from "styled-components"

const MainDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 5rem;
    background-color: #490688;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
`

const RoomDiv = styled.div`
    width: 5rem;
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    padding-left: 1rem;
`

const DotImg = styled.img`
    width: auto;
    height: auto;
    max-width: 9px;
    max-height: 9px;
`

const XDiv = styled.div`
    padding-right: 1rem;
`

const Room = styled.h3`
    font-size: 2.5rem;
    color: white;
    padding-left: 1rem;
`

export {
    MainDiv,
    RoomDiv,
    XDiv,
    Room,
    DotImg
}