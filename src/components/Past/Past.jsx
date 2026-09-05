<<<<<<< HEAD
import LinkRow from "../LinkRow/LinkRow"
import Reveal from "../Reveal/Reveal"
=======
import LinkRow from "../LinkRow/LinkRow";
>>>>>>> be82fe8ea0354771f6cdf32cd04f26e0d8ba6f1b
import one from "../../img/Tools/1.png"
import two from "../../img/Tools/2.png"
import three from "../../img/Tools/3.png"
import fore from "../../img/Tools/4.png"

import oneImg from "../../img/Past/1.png"
import twoImg from "../../img/Past/2.png"
import threeImg from "../../img/Past/3.png"
import foreImg from "../../img/Past/4.png"
import fiveImg from "../../img/Past/5.png"
<<<<<<< HEAD
=======
import styled from 'styled-components'
>>>>>>> be82fe8ea0354771f6cdf32cd04f26e0d8ba6f1b
import "./Past.css"

import Button from "../Button/Button"

<<<<<<< HEAD
function Past() {
    const logos = [oneImg, twoImg, threeImg, foreImg, fiveImg]
    const shotMeta = [
=======
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
>>>>>>> be82fe8ea0354771f6cdf32cd04f26e0d8ba6f1b
        { text: "6''", img: one },
        { text: "f/11", img: two },
        { text: "800", img: three },
        { text: "Nepal", img: fore },
    ]
<<<<<<< HEAD

    return (
        <section className="past">
            <div className="past__clients">
                <div className="container">
                    <Reveal className="past__top-title-box">
                        <h2 className="past__top-title">Past clients</h2>
                        <p className="past__top-subtitle">Trusted by your favourite companies</p>
                    </Reveal>
                    <ul className="past__label-row">
                        {logos.map((img, index) => (
                            <Reveal as="li" className="past__link" key={index} delay={index * 70}>
                                <a href="#top">
                                    <img src={img} alt="" />
                                </a>
                            </Reveal>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="past__hero">
                <div className="past__hero-inner container">
                    <Reveal className="past__text-box">
                        <h2 className="past__title">Star fall in the Himalayas</h2>
                        <p className="past__text">Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.</p>
                    </Reveal>
                    <Reveal delay={160} className="past__meta">
                        <LinkRow props={shotMeta} className="linkRow--overlay" />
                    </Reveal>
                </div>
            </div>

            <div className="past__cta" id="contact">
                <div className="container">
                    <Reveal className="past__bottom-box">
                        <h2 className="bottom__title">Need help with photography or videography?</h2>
                        <p className="bottom__subtitle">We're here for you!</p>
                        <Button>Get in touch</Button>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default Past
=======
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
>>>>>>> be82fe8ea0354771f6cdf32cd04f26e0d8ba6f1b
