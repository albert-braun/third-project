import Button from "../Button/Button";
import Reveal from "../Reveal/Reveal";
import "./What.css"
import one from "../../img/Waht/1.png"
import two from "../../img/Waht/2.png"
import three from "../../img/Waht/3.png"
import fore from "../../img/Waht/4.png"
import styled from "styled-components";

const arr = [
    { img: one, title: "Wildlife Photography", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis." },
    { img: two, title: "Drone Photography", text: "Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam." },
    { img: three, title: "Architecture Photography", text: "Aenean porta neque eget consequat fringilla. Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Fusce tincidunt aliquet sapien, sit amet rhoncus leo imperdiet nec." },
    { img: fore, title: "Product Photography", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis." },
]

const Item = styled.article`
    position: relative;
    display: flex;
    align-items: flex-end;
    min-height: clamp(420px, 52vw, 600px);
    width: 100%;
    height: 100%;
    color: #fff;
    overflow: hidden;
    background: #111 url(${(props) => props.$img}) center / cover no-repeat;

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.78) 0%, rgba(0, 0, 0, 0.2) 48%, transparent 72%);
        pointer-events: none;
    }
`

export default function What() {
    return (
        <section className="what" id="areas">
            <div className="what__container container">
                <Reveal className="what__title-box">
                    <h2 className="what__title">What we do.</h2>
                    <p className="what__subtitle">The areas that we're specialized in.</p>
                </Reveal>
                <div className="what__row">
                    {arr.map((item, index) =>
                        <Reveal key={item.title} className="what__card" variant="scale" delay={index * 90}>
                            <Item $img={item.img}>
                                <div className="item__text-box">
                                    <h3 className="item__title">{item.title}</h3>
                                    <p className="item__text">{item.text}</p>
                                    <Button>Read more</Button>
                                </div>
                            </Item>
                        </Reveal>
                    )}
                </div>
            </div>
        </section>
    )
}
