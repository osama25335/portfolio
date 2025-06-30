import React from 'react'
import './skills.css'
import { BadgeCheck } from 'lucide-react'

function Frontend() {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>Frontend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <BadgeCheck className='check__icon' />
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <BadgeCheck className='check__icon' />
            <div>
              <h3 className="skills__name">Css</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <BadgeCheck className='check__icon' />
            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <BadgeCheck className='check__icon' />
            <div>
              <h3 className="skills__name">TailwindCss</h3>
              <span className="skills__level">intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <BadgeCheck className='check__icon' />
            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <BadgeCheck className='check__icon' />
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frontend