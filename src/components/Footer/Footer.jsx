import logo from "../../img/Header/logo.png"
import Reveal from "../Reveal/Reveal"
import "./Footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <Reveal className="footer__row">
                    <a href="#top" className="footer__logo">
                        <img src={logo} alt="Aperture" />
                    </a>
                    <nav className="footer__nav" aria-label="Footer">
                        <a href="#areas">Business areas</a>
                        <a href="#featured">Featured images</a>
                        <a href="#gear">Gear cage</a>
                        <a href="#contact">Contact</a>
                    </nav>
                    <div className="footer__socials">
                        <a href="#contact" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
                                <rect x="3" y="3" width="18" height="18" rx="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                            </svg>
                        </a>
                        <a href="#contact" aria-label="Twitter">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                <path d="M19.6 7.3c.5-.3.8-.8.9-1.4-.5.3-1 .5-1.6.6A2.5 2.5 0 0 0 14.6 9c0 .2 0 .4.1.5-2.1-.1-4-1.1-5.2-2.7-.2.4-.3.8-.3 1.3 0 .9.5 1.7 1.1 2.1-.4 0-.8-.1-1.1-.3v.1c0 1.2.9 2.3 2 2.5-.2.1-.5.1-.7.1-.2 0-.3 0-.5-.1.3 1 1.2 1.8 2.3 1.8A5 5 0 0 1 6 16.4 7.1 7.1 0 0 0 9.8 17.5c4.6 0 7.1-3.8 7.1-7.1v-.3c.5-.4.9-.8 1.2-1.3-.5.2-.9.3-1.5.4z" />
                            </svg>
                        </a>
                        <a href="#contact" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                <path d="M14 9h3V6h-3c-1.9 0-3 1.3-3 3.2V11H9v3h2v6h3v-6h2.6l.4-3H14V9.4c0-.3.2-.4.5-.4z" />
                            </svg>
                        </a>
                    </div>
                </Reveal>
                <Reveal as="p" className="footer__copy" delay={120}>
                    Aperture Photography, Inc. All rights reserved.
                </Reveal>
            </div>
        </footer>
    )
}
