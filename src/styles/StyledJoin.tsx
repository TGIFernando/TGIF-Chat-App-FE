import styled from "styled-components"

const OtherDiv = styled.div`
    background-color: #490688;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 40vh;
    border-radius: 50px;
    padding-top: 2rem;
`

const MainDiv = styled.div`
    background-color: #490688;
    width: 85vw;
    height: 45vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
`
const Jooin = styled.h1`
    font-size: 2rem;
`

const BoxContainer = styled.div`
    padding-bottom: 2rem;
`

const Boxes = styled.input`
    border-radius: 8px;
    border: none;
    height: 2.5rem;
    &:focus{
        border: 2px dashed purple;
        outline: none;
    }
`


export {
    MainDiv,
    Jooin,
    Boxes,
    OtherDiv,
    BoxContainer
}