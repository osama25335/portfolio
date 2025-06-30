import { Facebook, Github, Instagram } from 'lucide-react'
import "./home.css"
import React from 'react'

function Social() {
  return (
    <div className="home__social" >
        <a href="" className="home__socialIcon" target='_blank'>
            <Instagram/>
        </a>
        <a href="" className="home__socialIcon" target='_blank'>
            <Github/>
        </a>
        <a href="" className="home__socialIcon" target='_blank'>
            <Facebook/>
        </a>
    </div>
  )
}

export default Social