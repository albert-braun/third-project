import LinkRow from "../LinkRow/LinkRow"
import Reveal from "../Reveal/Reveal"
import one from "../../img/Tools/1.png"
import two from "../../img/Tools/2.png"
import three from "../../img/Tools/3.png"
import fore from "../../img/Tools/4.png"
import "./Tools.css"
import Button from "../Button/Button"

function Tools() {
    const arrOne = [
        { text: "1''", img: one },
        { text: "f/16", img: two },
        { text: "400", img: three },
        { text: "Japan", img: fore },
    ]
    const arrTwo = [
        { text: "0,8''", img: one },
        { text: "f/5,6", img: two },
        { text: "100", img: three },
        { text: "Sweden", img: fore },
    ]
    const arrThree = [
        { text: "1/400s", img: one },
        { text: "f/3,5", img: two },
        { text: "400", img: three },
        { text: "Costa Rica", img: fore },
    ]

    return (
        <section className="tools">
            <div className="tools__banner tools__banner--fuji">
                <Reveal className="tools-item__text-box">
                    <h2 className="tools-item__title">Sunset at Mount Fuji</h2>
                    <p className="tools-item__text">Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.</p>
                </Reveal>
                <Reveal delay={160} className="tools__meta">
                    <LinkRow props={arrOne} className="linkRow--overlay" />
                </Reveal>
            </div>

            <div className="tools__split" id="gear">
                <Reveal className="tools-item__left" variant="left">
                    <div className="tools-item__copy">
                        <p className="tools-item__subtitle">The Gear cage</p>
                        <h2 className="tools-item__heading">The tools that we use.</h2>
                        <p className="tools-item__lead">The say that "no place is boring if you've had a good night's sleep and have a pocket full of unexposed film". While we don't shoot (a lot) of film these days — these are the tools that we actually use everyday to capture the amazing things around us.</p>
                        <Button>Check it out</Button>
                    </div>
                </Reveal>
                <Reveal className="tools-item__right" variant="right" delay={140}>
                    <LinkRow props={arrTwo} className="linkRow--overlay" />
                </Reveal>
            </div>

            <div className="tools__banner tools__banner--leafs">
                <Reveal className="tools-item__text-box">
                    <h2 className="tools-item__title">Monstera Leafs</h2>
                    <p className="tools-item__text">Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</p>
                </Reveal>
                <Reveal delay={160} className="tools__meta">
                    <LinkRow props={arrThree} className="linkRow--overlay" />
                </Reveal>
            </div>
        </section>
    )
}

export default Tools
