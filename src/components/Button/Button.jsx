import styled from "styled-components";
<<<<<<< HEAD

=======
>>>>>>> be82fe8ea0354771f6cdf32cd04f26e0d8ba6f1b
const ButtonStyle = styled.a`
    text-align: center;
    color: #000;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: 0.4px;
    line-height: 42px;
<<<<<<< HEAD
    background-color: #fff;
    display: inline-block;
    min-width: 143px;
=======
 

    background-color: #fff;
    display: inline-block;
    width: 143px;
>>>>>>> be82fe8ea0354771f6cdf32cd04f26e0d8ba6f1b
    height: 42px;
    border-radius: 14px;
    border: 1px solid #fff;
    position: relative;
<<<<<<< HEAD
    padding-left: 44px;
    padding-right: 16px;
    cursor: pointer;
    transition: 0.5s ease;
    white-space: nowrap;

    &::before {
        position: absolute;
        content: "";
        border-radius: 50%;
        background-color: #000;
        display: inline-block;
        width: 32px;
        height: 32px;
        left: 5px;
        top: 4px;
        transition: 0.5s ease;
    }

    @media (hover: hover) {
        &:hover {
            padding-left: 0;
            padding-right: 25px;
            color: #fff;
            background-color: #000;

            &::before {
                background-color: #fff;
                left: calc(100% - 42px);
            }
=======
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
>>>>>>> be82fe8ea0354771f6cdf32cd04f26e0d8ba6f1b
        }
    }
`

export default function Button({ children }) {
    return (
<<<<<<< HEAD
        <ButtonStyle href="#contact">
=======
        <ButtonStyle>
>>>>>>> be82fe8ea0354771f6cdf32cd04f26e0d8ba6f1b
            {children}
        </ButtonStyle>
    )
}
