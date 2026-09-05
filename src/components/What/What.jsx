import Button from "../Button/Button";
import "./What.css"
import one from "../../img/Waht/1.png"
import two from "../../img/Waht/2.png"
import three from "../../img/Waht/3.png"
import fore from "../../img/Waht/4.png"
import styled from "styled-components";



let arr = [
    { img: one, title: "Wildlife Photography", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis." },
    { img: two, title: "Drone Photography", text: "Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam." },
    { img: three, title: "Architecture Photography", text: "Aenean porta neque eget consequat fringilla. Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Fusce tincidunt aliquet sapien, sit amet rhoncus leo imperdiet nec." },
    { img: fore, title: "Product Photography", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis." },
]
const Item = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;

    width: 576px;
    height: 600px;
    color: #fff;
    &::before {
        content: url(${props => props.img});
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}
`
export default function Waht() {
    
    return (
        <section className="what">
            <div className="what__container container">
                <div className="what__title-box">
                    <h2 className="what__title">What we do.</h2>
                    <h3 className="what__subtitle">The areas that we're specialized in.</h3>
                </div>
                <div className="what__row">
                    {arr.map((item, index) =>
                        <Item key={index} img={item.img}>

                            <div className="item__text-box">
                                <h3 className="item__title">{item.title}</h3>
                                <p className="item__text">{item.text}</p>
                                <Button>Read more</Button>
                            </div>
                        </Item>
                    )}
                </div>
            </div>
        </section>
    )
}