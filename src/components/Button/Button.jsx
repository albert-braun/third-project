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
    min-width: 143px;
    height: 42px;
    border-radius: 14px;
    border: 1px solid #fff;
    position: relative;
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
        }
    }
`

export default function Button({ children }) {
    return (
        <ButtonStyle href="#contact">
            {children}
        </ButtonStyle>
    )
}
