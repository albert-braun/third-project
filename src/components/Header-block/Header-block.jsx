import LinkRow from "../LinkRow/LinkRow";
import "./Header-block.css"
import imgOne from "../../img/HeaderBlock/1.png";
import imgTwo from "../../img/HeaderBlock/2.png";
import imgThree from "../../img/HeaderBlock/3.png";
import imgfour from "../../img/HeaderBlock/4.png";




let data = [
    {img: imgOne, text: "1/2000s", id: 1},
    {img: imgTwo, text: "f/11", id: 2},
    {img: imgThree, text: "100", id: 3},
    {img: imgfour, text: "Iceland", id: 4},
]
let num = [1,2,3,4,5]
export default function HeaderBlock() {
    return (
        <section className="HeaderBlock">
            <div style={{  maxWidth: "1440px"}} className="HeaderBlock__container container">
                <div className="HeaderBlock__text-box">
                    <h2 className="HeaderBlock__subtitle">Photographer & Filmmaker</h2>
                    <h1 className="HeaderBlock__title">Aperture Studios</h1>
                    <p className="HeaderBlock__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                </div>
                <LinkRow props={data}/>  
            </div>
        </section>
    )
}