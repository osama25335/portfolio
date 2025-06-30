import React, { useState } from 'react'
import './header.css'
import {BriefcaseBusiness, FileChartColumn, House, Image, LayoutGrid, SendHorizontal, UserRound, X} from 'lucide-react';
const Header = () => {
    //change background header
      window.addEventListener("scroll", function(){
        const header = this.document.querySelector(".header");

        if (this.scrollY >= 80) {
            header.classList.add('scroll__header');//add .show__scroll visible the scrollup
             
        } else {
            header.classList.remove('scroll__header');
        }
    })
    // toggle menu
    const [toggle, setToggle] = useState(false)
    const [activeNav, setActiveNav] = useState("#home")

  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Oussama</a>
            <div className={toggle ? "nav__menu show__menu" : "nav__menu"}>
                <ul className="nav__list" >
                    <li className="nav__item"><a href="#home" onClick={()=>{setActiveNav("#home")}} className={activeNav === "#home" ? "nav__link active__link" : "nav__link"}><House className="nav__icon" />home</a></li>
                    <li className="nav__item"><a href="#about"  onClick={()=>{setActiveNav("#about")}} className={activeNav === "#about" ? "nav__link active__link" : "nav__link"}><UserRound className="nav__icon" />about</a></li>
                    <li className="nav__item"><a href="#skills"  onClick={()=>{setActiveNav("#skills")}} className={activeNav === "#skills" ? "nav__link active__link" : "nav__link"}><FileChartColumn className="nav__icon" />skills</a></li>
                    <li className="nav__item"><a href="#services"  onClick={()=>{setActiveNav("#services")}} className={activeNav === "#services" ? "nav__link active__link" : "nav__link"}><BriefcaseBusiness className="nav__icon" />services</a></li>
                    <li className="nav__item"><a href="#portfolio"  onClick={()=>{setActiveNav("#portfolio")}} className={activeNav === "#portfolio" ? "nav__link active__link" : "nav__link"}><Image className="nav__icon" />portfolio</a></li>
                    <li className="nav__item"><a href="#contact" onClick={()=>{setActiveNav("#contact")}} className={activeNav === "#contact" ? "nav__link active__link" : "nav__link"}><SendHorizontal className="nav__icon" />contact</a></li>
                </ul>
                <X className="nav__close"  onClick={()=> setToggle(!toggle)}/>
            </div>
            <div className="nav__toggle" onClick={()=> setToggle(!toggle)}>
                <LayoutGrid />
            </div>
        </nav>
    </header>
)
}

export default Header