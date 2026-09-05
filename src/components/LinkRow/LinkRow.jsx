import styled from 'styled-components'
import "./LinkRow.css"

const List = styled.ul`
    display: flex;
    align-items: center;
    gap: 16px;
    color: #fff;
    z-index: 10;
    flex-wrap: wrap;

    @media (max-width: 599px) {
        gap: 10px 14px;
        width: 100%;
        justify-content: center;
    }
`

export default function LinkRow({ props, className = "" }) {
    return (
        <List className={className}>
            {props.map((item) => (
                <li key={item.text} className="linkRow__item">
                    <img src={item.img} alt="" />
                    <span className="linkRow__link">{item.text}</span>
                </li>
            ))}
        </List>
    )
}
