import styled from "styled-components";
const ButtonStyle = styled.a`
    text-align: center;
    color: #000;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: 0.4px;
    line-height: 42px;
 

    background-color: #fff;
    display: inline-block;
    width: 143px;
    height: 42px;
    border-radius: 14px;
    border: 1px solid #fff;
    position: relative;
    padding-left: 20px;
    cursor: pointer;
    transition: 0.5s all ease-in-out;
    &::before{
        position: absolute;
        content: "";
         background-color: #fff;
         border-radius: 50%;
         background-color: #000;
        display: inline-block;
         width: 32px;
        height: 32px;
        left: 5px;
        top: 3px;
        transition: 0.5s all ease-in-out;
    }

    &:hover{
        padding-left: 0;
        padding-right: 25px;
        color: #fff;
        background-color: #000;
        &::before{
            background-color: #fff;
            left: 100px;
        }
    }
`

export default function Button({ children }) {
    return (
        <ButtonStyle>
            {children}
        </ButtonStyle>
    )
}
