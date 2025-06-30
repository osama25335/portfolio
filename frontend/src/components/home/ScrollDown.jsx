import "./home.css"
import { ArrowDown, Mouse } from 'lucide-react'

function ScrollDown() {
  return (
    <div className="home__scroll">
        <a href="#about" className = "home__scroll_button home__socialIcon button_flex">
          <Mouse/>
          <span className="home__scroll_name">scroll down</span>
        </a>
        <ArrowDown className="home__scroll_arrowDown wheel"/>
    </div>
  )
}

export default ScrollDown