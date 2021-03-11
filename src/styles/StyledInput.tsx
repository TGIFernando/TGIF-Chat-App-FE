import styled from "styled-components"

const SForm = styled.form`
    background-color: #490688;
    width: 100%;
    display:flex;
    flex-wrap: wrap;
    height: 5rem;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    width: 18%;
    height: 3rem;
    font-size: 1.5rem;
    background-color: #61abff;
    color: white;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    border: none;
    &:focus{
        outline: none;
    }
`

const SInput = styled.input`
    width: 78%;
    height: 3rem;
    font-size: 1.5rem;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    border: none;
    &:focus{
        outline: none;
    }
`

export {
    SForm,
    SInput,
    Button
}