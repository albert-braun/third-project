import LinkRow from "../LinkRow/LinkRow";
import one from "../../img/Tools/1.png"
import two from "../../img/Tools/2.png"
import three from "../../img/Tools/3.png"
import fore from "../../img/Tools/4.png"
import "./Tools.css"
import Button from "../Button/Button"

function Tools() {
    let arr = [3, 2, 1, 4, 5, 6, 7, 8, 9, 10];
    function quickSort(array) {
        if(array.length <= 1){
            return array
        }
        let pivont = array[0];
        let less = array.slice(1).filter(e => e <= pivont);
        let great = array.slice(1).filter(e => e > pivont);

        return quickSort(less).concat(pivont, quickSort(great))
    }
    console.log(quickSort(arr))
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
            <div style={{ maxWidth: "1440px" }} className="container tools__container">
                <div className="tools__row">
                    <div className="tools__item-big ">
                        <div className="tools-item__text-box">
                            <h2 className="tools-item__title">Sunset at Mount Fuji</h2>
                            <p className="tools-item__text">Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.</p>
                        </div>
                        <LinkRow props={arrOne} />
                    </div>

                    <div className="tools__item-big ">
                        <div className="tools-item__left">
                            <div className="tools-item__text-box">
                                <h3 className="tools-item__subtitle">The Gear cage</h3>
                                <h2 className="tools-item__title">The tools that we use.</h2>
                                <p className="tools-item__text">The say that "no place is boring if you've had a good night's sleep and have a pocket full of unexposed film". While we don't shoot (a lot) of film these days — these are the tools that we actually use everyday to capture the amazing things around us.</p>
                                <Button>Check it out</Button>
                            </div>
                        </div>
                        <div className="tools-item__right">
                            <div className="tools-item__img-box">
                                <LinkRow props={arrTwo} />
                            </div>
                        </div>


                    </div>
                    <div className="tools__item-big ">
                        <div className="tools-item__text-box">
                            <h2 className="tools-item__title">Monstera Leafs</h2>
                            <p className="tools-item__text">Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</p>
                        </div>
                        <LinkRow props={arrThree} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tools;