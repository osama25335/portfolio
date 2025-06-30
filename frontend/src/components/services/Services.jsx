import { AppWindow, CircleCheck, FileOutput, Gpu, MoveRight, X } from 'lucide-react'
import "./services.css";
import { useState } from 'react';

function Services() {
    const[toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="services section" id='services'>
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>
        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <AppWindow className='services__icon'/>
                    <h3 className="services__title">
                        developer<br /> Web
                    </h3>
                </div>
                <span className="services__button" onClick={()=>toggleTab(1)}>View More
                    <MoveRight className='services__button_icon' />
                </span>
                <div className={toggleState === 1 ? "services__modal active__modal" : "services__modal" }>
                    <div className="services__modal_content">
                        <X onClick={()=>{toggleTab(0)}} className="services__modal_close"/>
                      
                        <h3 className="services__modal_title">Developer Web</h3>
                        <p className="services__modal_description">
                            service with more that 3 years of experience. providing quality work to client.
                        </p>
                        <ul className="services__modal_services grid">
                            <li className="services__modal_service">
                                <CircleCheck className='services__modal_icon' />
                                <p className='services__modal_info'>
                                    I develop the user interface
                                </p>
                            </li>
                            <li className="services__modal_service">
                                <CircleCheck className='services__modal_icon' />
                                <p className='services__modal_info'>
                                    web page development
                                </p>
                            </li>
                            <li className="services__modal_service">
                                <CircleCheck className='services__modal_icon' />
                                <p className='services__modal_info'>
                                    I create ux element interactions
                                </p>
                            </li>
                            <li className="services__modal_service">
                                <CircleCheck className='services__modal_icon' />
                                <p className='services__modal_info'>
                                    I develop the user interface
                                </p>
                            </li>
                            <li className="services__modal_service">
                                <CircleCheck className='services__modal_icon' />
                                <p className='services__modal_info'>
                                    I develop the user interface
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div>
                    <Gpu className='services__icon' />
                    <h3 className="services__title">digital <br /> Services </h3>
                </div>
                <span className="services__button" onClick={()=>toggleTab(2)}>View More
                    <MoveRight className='services__button_icon' />
                </span>
                <div className={toggleState === 2 ? "services__modal active__modal" : "services__modal"}>
                    <div className="services__modal_content">
                        <X onClick={()=>{toggleTab(0)}} className="services__modal_close"/>
                        <h3 className="services__modal_title">Digital services</h3>
                        <p className="services__modal_description">
                            service with more that 3 years of experience. providing quality work to client.
                        </p>
                        <ul className="services__modal_services grid">
                            <li className="services__modal_service">
                                <CircleCheck className='services__modal_icon' />
                                <p className='services__modal_info'>
                                    I develop the user interface
                                </p>
                            </li>
                            <li className="services__modal_service">
                                <CircleCheck className='services__modal_icon' />
                                <p className='services__modal_info'>
                                    web page development
                                </p>
                            </li>
                            <li className="services__modal_service">
                                <CircleCheck className='services__modal_icon' />
                                <p className='services__modal_info'>
                                    I create ux element interactions
                                </p>
                            </li>
                            <li className="services__modal_service">
                                <CircleCheck className='services__modal_icon' />
                                <p className='services__modal_info'>
                                    I develop the user interface
                                </p>
                            </li>
                            <li className="services__modal_service">
                                <CircleCheck className='services__modal_icon' />
                                <p className='services__modal_info'>
                                    I develop the user interface
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="services__content">
                <div>
                    <FileOutput className='services__icon'/>
                    <h3 className="services__title">PDF <br /> Filable Form</h3>
                </div>
                <span className="services__button" onClick={()=>toggleTab(3)}>View More
                    <MoveRight className='services__button_icon' />
                </span>
                <div className={toggleState === 3 ? "services__modal active__modal" : "services__modal"}>
                    <div className="services__modal_content">
                        <X onClick={()=>{toggleTab(0)}} className="services__modal_close"/>
                        <h3 className="services__modal_title">Filable PDF Forms</h3>
                        <p className="services__modal_description">
                            service with more that 3 years of experience. providing quality work to client.
                        </p>
                        <ul className="services__modal_services grid">
                            <li className="services__modal_service">
                                <CircleCheck className='services__modal_icon' />
                                <p className='services__modal_info'>
                                    I develop the user interface
                                </p>
                            </li>
                            <li className="services__modal_service">
                                <CircleCheck className='services__modal_icon' />
                                <p className='services__modal_info'>
                                    web page development
                                </p>
                            </li>
                            <li className="services__modal_service">
                                <CircleCheck className='services__modal_icon' />
                                <p className='services__modal_info'>
                                    I create ux element interactions
                                </p>
                            </li>
                            <li className="services__modal_service">
                                <CircleCheck className='services__modal_icon' />
                                <p className='services__modal_info'>
                                    I develop the user interface
                                </p>
                            </li>
                            <li className="services__modal_service">
                                <CircleCheck className='services__modal_icon' />
                                <p className='services__modal_info'>
                                    I develop the user interface
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Services