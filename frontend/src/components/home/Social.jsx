import { Facebook, Github, Instagram } from 'lucide-react'
import "./home.css"
import React from 'react'

function Social() {
  return (
    <div className="home__social" >
        <a href="https://www.instagram.com/ouss_ama_0505/" className="home__socialIcon" target='_blank'>
            <Instagram/>
        </a>
        <a href="https://github.com/osama25335" className="home__socialIcon" target='_blank'>
            <Github/>
        </a>
        <a href="https://www.facebook.com/share/1Jp7Xf6JQn/" className="home__socialIcon" target='_blank'>
            <Facebook/>
        </a>
    </div>
  )
}

export default Social