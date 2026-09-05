import { useEffect, useState } from "react"
import "./Header.css"
import logo from "../../img/Header/logo.png"

const links = [
    { href: "#contact", label: "Contact" },
    { href: "#gear", label: "Gear cage" },
    { href: "#featured", label: "Featured images" },
    { href: "#areas", label: "Business areas" },
]

export default function Header() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    useEffect(() => {
        document.body.classList.toggle("no-scroll", open)
        return () => document.body.classList.remove("no-scroll")
    }, [open])

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth > 959) setOpen(false)
        }
        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [])

    const close = () => setOpen(false)

    return (
        <header className={`header${scrolled || open ? " is-scrolled" : ""}`}>
            <div className="container">
                <div className="header__row">
                    <a href="#top" className="header__logo" onClick={close}>
                        <img src={logo} alt="Aperture" />
                    </a>
                    <button
                        className={`header__burger${open ? " is-open" : ""}`}
                        type="button"
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                    <nav className={`header__nav${open ? " is-open" : ""}`}>
                        <ul className="header__list">
                            {links.map((link) => (
                                <li className="header__item" key={link.href}>
                                    <a href={link.href} className="header__link" onClick={close}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <a href="#contact" className="header__button" onClick={close}>
                            Get template
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    )
}
