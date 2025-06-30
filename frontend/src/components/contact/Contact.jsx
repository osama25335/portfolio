import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Send } from 'lucide-react';
import {MessengerLogo, WhatsappLogo} from '@phosphor-icons/react';
import "./contact.css"
function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_fdp59nm', 'template_rdo28p4', form.current, {
            publicKey: 'POzNuyKvLrPRgonrO',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
        e.target.reset();
    };
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>
            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>
                    <div className="contact__info">
                        <div className="contact__card">
                            <Mail className='contact__card_icon'/>
                            <h3 className="contact__card_title">Email</h3>
                            <span className="contact__card_data">Oussama</span>
                            <a href='mailto:khelifabaghdoucheoussama0@gmail.com' target='_blank' className="contact__button">
                                Write me
                                <box-icon name='right-arrow-alt'></box-icon>
                            </a>
                        </div>
                        <div className="contact__card">

                            <WhatsappLogo className='contact__card_icon'/>
                            <h3 className="contact__card_title">Whatsapp</h3>
                            <span className="contact__card_data">+213 659 55 26 05</span>
                            <a href="https://wa.me/213659552605" target='_blank' className="contact__button">
                                Write me
                                <box-icon name='right-arrow-alt'></box-icon>
                            </a>
                        </div>
                        <div className="contact__card">
                            <MessengerLogo className='contact__card_icon'/>
                            <h3 className="contact__card_title">Messenger</h3>
                            <span className="contact__card_data">oussama.me</span>
                            <a href="https://m.me/oussama.khelifa.baghdouche.2025/" target='_blank' className="contact__button">
                                Write me
                                <box-icon name='right-arrow-alt'></box-icon>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>
                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form_div">
                            <label htmlFor="" className='contact__form_tag'>Name</label>
                            <input type="text" name='name' className="contact__form_input" placeholder='Your Name' />

                        </div>
                        <div className="contact__form_div">
                            <label htmlFor="" className='contact__form_tag'>Email</label>
                            <input type="email" name='email' className="contact__form_input" placeholder='Your Email' />
                        </div>
                        <div className="contact__form_div contact__form_area">
                            <label htmlFor="" className='contact__form_tag'>Project</label>
                            <textarea name="project" cols="30" rows="10" id="" className="contact__form_input" placeholder='Write your Project'></textarea> 
                        </div>
                        <button className='button_flex button'>Send Message <Send className='button__icon'/></button>

                    </form>
                </div>
            </div>
    </section>
  )
}

export default Contact