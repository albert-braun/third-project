import LinkRow from "../LinkRow/LinkRow"
import Reveal from "../Reveal/Reveal"
import one from "../../img/Tools/1.png"
import two from "../../img/Tools/2.png"
import three from "../../img/Tools/3.png"
import fore from "../../img/Tools/4.png"

import oneImg from "../../img/Past/1.png"
import twoImg from "../../img/Past/2.png"
import threeImg from "../../img/Past/3.png"
import foreImg from "../../img/Past/4.png"
import fiveImg from "../../img/Past/5.png"
import "./Past.css"

import Button from "../Button/Button"

function Past() {
    const logos = [oneImg, twoImg, threeImg, foreImg, fiveImg]
    const shotMeta = [
        { text: "6''", img: one },
        { text: "f/11", img: two },
        { text: "800", img: three },
        { text: "Nepal", img: fore },
    ]

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
