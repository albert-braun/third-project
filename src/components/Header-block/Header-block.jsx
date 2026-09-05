import LinkRow from "../LinkRow/LinkRow";
import Reveal from "../Reveal/Reveal";
import "./Header-block.css"
import imgOne from "../../img/HeaderBlock/1.png";
import imgTwo from "../../img/HeaderBlock/2.png";
import imgThree from "../../img/HeaderBlock/3.png";
import imgfour from "../../img/HeaderBlock/4.png";

const data = [
    { img: imgOne, text: "1/2000s", id: 1 },
    { img: imgTwo, text: "f/11", id: 2 },
    { img: imgThree, text: "100", id: 3 },
    { img: imgfour, text: "Iceland", id: 4 },
]

export default function HeaderBlock() {
    return (
        <section className="HeaderBlock" id="featured">
            <div className="HeaderBlock__inner container">
                <div className="HeaderBlock__text-box">
                    <Reveal as="p" className="HeaderBlock__subtitle">
                        Photographer & Filmmaker
                    </Reveal>
                    <Reveal as="h1" className="HeaderBlock__title" delay={90}>
                        Aperture Studios
                    </Reveal>
                    <Reveal as="p" className="HeaderBlock__text" delay={180}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </Reveal>
                </div>
                <Reveal delay={280}>
                    <LinkRow props={data} className="linkRow--hero" />
                </Reveal>
                <a href="#areas" className="HeaderBlock__scroll" aria-label="Scroll to next section">
                    <span></span>
                </a>
            </div>
        </section>
    )
}
