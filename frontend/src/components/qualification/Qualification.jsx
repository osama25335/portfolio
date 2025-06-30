import { Briefcase, Calendar, GraduationCap } from 'lucide-react'
import "./qualification.css"
import { useState } from 'react';
function Qualification() {
    const[toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
    <section className="qualification section" id='qualifiction'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">What i offer</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div onClick={()=>{toggleTab(1)}} className={toggleState === 1 ? "qualification__button qualification__active button_flex" : "qualification__button button_flex"}>
                        <GraduationCap className='qualification__icon' />Education
                    </div>
                    <div onClick={()=>{toggleTab(2)}}  className={toggleState === 2 ? "qualification__button qualification__active button_flex" : "qualification__button button_flex"}>
                        <Briefcase  className='qualification__icon' />Experience
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className = {toggleState === 1 ? 'qualification__content qualification__content_active ':'qualification__content '}>
                        <div className='qualification__data'>
                            <div>
                                <h3 className="qualification__title">
                                    System Information
                                </h3>
                                <span className='qualification__subtitle'>Mila - Université</span>
                                <div className="qualification__calendar">
                                    <Calendar size={16} className="qualification__calendar_icon" />9/2016-6/2021
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>

                            </div>
                        </div>
                        <div className='qualification__data'>
                            <div>

                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    Cryptography and Security
                                </h3>
                                <span className='qualification__subtitle'>batna 2 - Université</span>
                                <div className="qualification__calendar">
                                    <Calendar size={16} className="qualification__calendar_icon" />9/2021-7/2023
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className = {toggleState === 2 ? 'qualification__content qualification__content_active ':'qualification__content '}>
                        <div className='qualification__data'>
                            <div>
                                <h3 className="qualification__title">
                                    Developer Web
                                </h3>
                                <span className='qualification__subtitle'>Freelancing</span>
                                <div className="qualification__calendar">
                                    <Calendar size={16} className="qualification__calendar_icon" />2018 - 2025
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>

                            </div>
                        </div>
                        <div className='qualification__data'>
                            <div>

                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    Security Systems
                                </h3>
                                <span className='qualification__subtitle'>batna - Institue</span>
                                <div className="qualification__calendar">
                                    <Calendar size={16} className="qualification__calendar_icon" />2021 - 2024
                                </div>
                            </div>

                        </div>
                        <div className='qualification__data'>
                            <div>
                                <h3 className="qualification__title">
                                    Digital Services
                                </h3>
                                <span className='qualification__subtitle'>Freelancing</span>
                                <div className="qualification__calendar">
                                    <Calendar size={16} className="qualification__calendar_icon" />2020 - 2025
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>

                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
    </section>
        )
}

export default Qualification