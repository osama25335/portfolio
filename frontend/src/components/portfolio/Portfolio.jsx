import React, { useState } from 'react'
import chatWorld from "../../assets/chatWorld.png"
import formMeUp from "../../assets/formMeUp.png"
import form from "../../assets/form.png"
import './portfolio.css'
import {ArrowRight } from 'lucide-react'
function Portfolio() {
  const [type, setType] = useState("all");
  const portfolioArray = [
    {
      "type":"web",
      "title" : "ChatWorld",
      "description":"is a web application that provides real-time chat functionality between users.",
      "image" : chatWorld,
      "url" : "https://github.com/osama25335/chat-app.git"
    },
    {
      "type":"web",
      "title" : "FormMeUp",
      "description" : "You can easily convert filled forms into high-quality downloadable PDFs.",
      "image" : formMeUp,
      "url" : "https://github.com/osama25335/FormMe.git"
    },
    {
      "type":"DS",
      "title" : "Illustration SVG",
      "description" : "is service that offers custom scalable vector illustrations for web and mobile interfaces",
      "image" : form,
      "url" : ""
    }
    
  ]
  const filterItems = type === "web" ? portfolioArray.filter(object=>object.type === "web") : type === "DS" ? portfolioArray.filter(object=>object.type === "DS") : portfolioArray;


  return (
    <section className='portfolio section' id='portfolio'>
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">What i create</span>
      <div className="portfolio__container container">
        <div className='portfolio__nav'>
          <ul className='portfolio__nav_list'>
            <li className='portfolio__nav_item' onClick={()=>{setType("all")}}><span>all</span></li>
            <li className='portfolio__nav_item'onClick={()=>{setType("web")}}><span>web</span></li>
            <li className='portfolio__nav_item'onClick={()=>{setType("DS")}}><span>digital services</span></li>
          </ul>
        </div>
        <div className="portfolio__content">
          {
            filterItems.map((object, index)=>(
              <div className='content__card' key={index}>
                <div className="card__img">
                  <img src={object.image} alt=""/>
                </div>
                <div className='card__title'>
                  <h3>{object.title}</h3>
                  <a href={object.url} className='card__link' target='_blank'>Github Code<ArrowRight size={20} className='card__link_icon'/> </a>
                </div>
              </div>
            ))
          }
        </div>

      </div>
    </section>

  )
}

export default Portfolio