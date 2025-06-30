import './about.css';
import AboutImg from '../../assets/about.jpg';
import CV from '../../assets/cv.pdf';
import Info from './Info';
import { FileText } from 'lucide-react';
function About() {
  return (
    <section className='about section' id='about'>
        <h2 className='section__title'>About Me</h2>
        <span className="section__subtitle">My introduction</span>
        <div className="about__container container grid">
            <img src={AboutImg} alt="" className='about__img' />
            <div className="about__data">
              <Info/>
              <p className='about__description'>
                 I specialize in building smart, efficient online solutions—like custom forms, fillable PDFs, and automation tools—while applying my expertise in cybersecurity to ensure data privacy and safe digital workflows. With a proactive mindset and a passion for secure, modern tech, I help businesses thrive in a digital-first world.
              </p>
              <a download href={CV} className="button button_flex">Download CV<FileText className='button__icon'/></a>
            </div>
        </div>
    </section>
  )
}

export default About