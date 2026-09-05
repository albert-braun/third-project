import "./Header.css"
import logo from "../../img/Header/logo.png"
export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logo} alt="" />
                    </div>
                    <nav className="header__nav">
                        <ul className="header__list">
                            <li className="header__item"><a href="" className="header__link">Contact</a></li>
                            <li className="header__item"><a href="" className="header__link">Gear cage</a></li>
                            <li className="header__item"><a href="" className="header__link">Featured images</a></li>
                            <li className="header__item"><a href="" className="header__link">Business areas</a></li>
                        </ul>
                        <a href="#" className="header__button">Get template</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}