import { Facebook, Github, Instagram } from 'lucide-react'
import "./footer.css"

function Footer() {
  return (
        <footer className="footer" >
            <div className="footer__container container">
                <h1 className="footer__title">Oussama</h1>
                <ul className="footer__list">
                    <li><a href="#about" className='footer__link'>About</a></li>
                    <li><a href="#skills" className='footer__link'>Skills</a></li>
                    <li><a href="#projects" className='footer__link'>Projects</a></li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.facebook.com/oussama.khelifa.baghdouche.2025" className='footer__social_link' target='_blank'><Facebook /></a>
                    <a href="https://github.com/osama25335" className='footer__social_link' target='_blank'><Github /></a>
                    <a href="https://www.instagram.com/ouss_ama_0505" className='footer__social_link' target='_blank'><Instagram /></a>
                </div>
                {/* Bottom Bar */}
                <div className="footer__copy">
                    &copy; {new Date().getFullYear()} All rights reserved.
                </div>
            </div>
        </footer>
  )
}

export default Footer