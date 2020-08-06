import React from 'react';
import sprite from '../../images/sprite.svg'; 
import Auxillary from '../../hoc/Auxillary/Auxillary';
const header = (props) =>{
    return (
        <Auxillary>
            <nav  className="navigation">
                <ul className="navigation__items">
                    <li className="navigation__item"
                        style={{backgroundColor:props.selectedMenu === 'home' ? "#333" : ""}}
                        onClick={() => props.clicked('home')}>
                        <a href="#home">
                            <svg className="navigation__icon">
                                <use href={sprite + '#icon-profile'}></use>
                            </svg>
                            <span>Home</span>
                        </a>
                    </li>
                    <li className="navigation__item"
                        style={{backgroundColor:props.selectedMenu === 'aboutMe' ? "#333" : ""}}
                        onClick={() => props.clicked('aboutMe')}>
                        <a href="#aboutMe">
                            <svg className="navigation__icon">
                                    <use href={sprite + '#icon-user'}></use>
                                </svg>
                            <span>About Me</span>
                        </a>
                    </li>
                    <li className="navigation__item"
                        style={{backgroundColor:props.selectedMenu === 'experience' ? "#333" : ""}}
                        onClick={() => props.clicked('experience')}>
                        <a href="#experience">
                            <svg className="navigation__icon">
                                <use href={sprite + '#icon-sphere'}></use>
                            </svg>
                            <span>Experience</span>
                        </a>
                    </li>
                    <li className="navigation__item"
                        style={{backgroundColor:props.selectedMenu === 'technology' ? "#333" : ""}}
                        onClick={() => props.clicked('technology')}>
                        <a href="#technology">
                            <svg className="navigation__icon">
                                <use href={sprite + '#icon-cog'}></use>
                            </svg>
                            <span>Technology</span>
                        </a>
                    </li>
                    <li className="navigation__item"
                        style={{backgroundColor:props.selectedMenu === 'certifications' ? "#333" : ""}}
                        onClick={() => props.clicked('certifications')}>
                        <a href="#certifications">
                            <svg className="navigation__icon">
                                <use href={sprite + '#icon-trophy'}></use>
                            </svg>
                            <span>Certifications</span>
                        </a>
                    </li>
                    <li className="navigation__item"
                        style={{backgroundColor:props.selectedMenu === 'contact' ? "#333" : ""}}
                        onClick={() => props.clicked('contact')}>
                        <a href="#contact">
                            <svg className="navigation__icon">
                                <use href={sprite + '#icon-mail4'}></use>
                            </svg>
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <header id="home" className="header">
                <h1 className="heading__primary">
                    <span className="heading__primary--main animate-left">I am Ajay Maurya</span>
                    <span className="heading__primary--sub animate-right">Full Stack Developer</span>
                </h1>
            </header>
        </Auxillary>
    )
}
export default header;