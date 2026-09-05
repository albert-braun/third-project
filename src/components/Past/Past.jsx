import LinkRow from "../LinkRow/LinkRow";
import one from "../../img/Tools/1.png"
import two from "../../img/Tools/2.png"
import three from "../../img/Tools/3.png"
import fore from "../../img/Tools/4.png"

import oneImg from "../../img/Past/1.png"
import twoImg from "../../img/Past/2.png"
import threeImg from "../../img/Past/3.png"
import foreImg from "../../img/Past/4.png"
import fiveImg from "../../img/Past/5.png"
import styled from 'styled-components'
import "./Past.css"

import Button from "../Button/Button"

let Row = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    flex-wrap: wrap;
    gap: 20px;
`
function Past() {
    let arr = [
        oneImg,
        twoImg,
        threeImg,
        foreImg,
        fiveImg
    ]
    let arrOne = [
        { text: "6''", img: one },
        { text: "f/11", img: two },
        { text: "800", img: three },
        { text: "Nepal", img: fore },
    ]
    return (
        <section className="past">
            <div className="past__row">
                <div className="past__item">
                    <div className="past__container container">
                        <div className="past__top-title-box">
                            <h2 className="past__top-title">Trusted by your favourite companies</h2>
                            <h3 className="past__top-subtitle">Trusted by your favourite companies</h3>
                        </div>
                        <Row className="past__label-row">
                            {arr.map((img, index) => <li className="past__link" key={index}><a href=""><img src={img} alt="" /></a></li>)}
                        </Row>
                    </div>
                </div>
                <div className="past__item">
                    <div className="past__container container" style={{ maxWidth: "1440px" }}>
                        <div className="past__text-box">
                            <h2 className="past__title">Star fall in the Himalayas</h2>
                            <p className="past__text">Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.</p>
                        </div>
                        <LinkRow props={arrOne} />
                    </div>
                </div>
                <div className="past__item">
                    <div className="past__container container">
                        <div className="past__bottom-box">
                            <h2 className="bottom__title">Need help with photography or videography?</h2>
                            <h3 className="bottom__subtitle">We're here for you!</h3>
                            <Button>Get in touch</Button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Past;