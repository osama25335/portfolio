import { ArrowUp } from "lucide-react"
import "./scrollup.css"
function Scrollup() {
    window.addEventListener("scroll", function(){
        const scrollUp = this.document.querySelector(".scrollup");

        if (this.scrollY >= 560) {
            scrollUp.classList.add('show__scroll');//add .show__scroll visible the scrollup
            
        } else {
            scrollUp.classList.remove('show__scroll');
        }
    })
  return (
    <a href="" className="scrollup">
        <ArrowUp className="scrollup__icon" />
    </a>
  )
}

export default Scrollup