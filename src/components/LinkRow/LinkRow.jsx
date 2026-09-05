import styled from 'styled-components'
import "./LinkRow.css"
const List = styled.ul`
    display: flex;
    align-self: flex-end;
    gap: 16px;
    color: #fff;
    z-index: 10;
`


export default function LinkRow({ props }) {

    return (
        <List>
            {props.map((item, index) => <li key={index} className="linkRow__item" ><img src={item.img} alt="" /> <a href="" className='linkRow__link'>{item.text}</a></li>)}
        </List>
    )
}