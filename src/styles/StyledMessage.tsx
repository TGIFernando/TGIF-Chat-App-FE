import styled from "styled-components"

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70vh;
    overflow: auto;
    flex: auto;
`

const SenderDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const SenderBubble = styled.div`
    font-size: 1.5rem;
    padding: .5rem;
    background-color: #61abff;
    border-radius: 20px;
    border-bottom-right-radius: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 50%;
    margin: .5rem 0;
    white-space: normal;
    overflow: hidden;
`

const RecDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const RecBubble = styled.div`
    font-size: 1.5rem;
    padding: .5rem;
    background-color: slategrey;
    border-radius: 20px;
    border-bottom-left-radius: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 50%;
    margin: .5rem 0;
    white-space: normal;
    overflow: hidden;
`

const P1 = styled.p`
    padding-right: .2rem;
    font-size: 1.5rem;
`

const P2 = styled.p`
    padding-left: .2rem;
    font-size: 1.5rem;
`

export {
    MainDiv,
    SenderDiv,
    SenderBubble,
    RecDiv,
    RecBubble,
    P1,
    P2
}