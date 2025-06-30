import { Award, Briefcase, Headset } from "lucide-react"

function Info() {
  return (
    <div className='about__info grid'>
        <div className="about__box">
            <Award className="about__icon"/>
            <h3 className="about__title">
                Experience
            </h3>
            <span className="about__subtitle">
                5 Years Working
            </span>
        </div>
        <div className="about__box">
            <Briefcase className="about__icon" />
            <h3 className="about__title">
                Completed
            </h3>
            <span className="about__subtitle">
                3 + Projects 
            </span>
        </div>
        <div className="about__box">
            <Headset className="about__icon"/>
            <h3 className="about__title">
                Support
            </h3>
            <span className="about__subtitle">
                Online 24/7
            </span>
        </div>
    </div>
  )
}

export default Info

