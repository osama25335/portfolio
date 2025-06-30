import { Hand, Send } from 'lucide-react'
import "./home.css"

function Data() {
  return (
    <div className="home__data">
        <h1 className="home__title">
            oussama
            <span className="home__titleLastname"> khelifa baghdouche</span>
        </h1>
        <h3 className="home__subtitle">Cryptoghraphy and security</h3>
        <p className="home__description">I'm a versatile digital services freelancer with a strong academic foundation in Cryptography, Security, and Information Systems.</p>
        <a href="#contact" className='button_flex button'>Sey Hello <Send className='button__icon'/></a>
    </div>
  )
}

export default Data