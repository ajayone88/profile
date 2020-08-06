import React from 'react';
import socialSprite from '../../images/socialSprite.svg';

const footer = () =>{
    return (
        <footer id="contact" className="footer">
            <h2 className="heading-secondary mg-bm-md section__technology-heading">Contact Details</h2>
            <div className="footer__information">
                <h4 className="heading-tertiary">Address</h4>
                <p className="paragraph">Zwinliweg 117 1185BZ Amstelveen</p>
                <h4 className="heading-tertiary">Mobile</h4>
                <p className="paragraph">+31 0686028059</p>
                <h4 className="heading-tertiary">Email</h4>
                <p className="paragraph">ajayone88@gmail.com</p>
            </div>
            <div className="footer__social">
                <h4 className="heading-tertiary mg-bm-md">Connect with me</h4>
               <div className="footer__social-icon">
                    <a href={'https://www.facebook.com/ajay.maurya.92'} 
                            target="_blank" 
                            className="footer__social--facebook">
                        <svg className="footer__facebook-icon">
                            <use href={socialSprite + '#icon-facebook2'}></use>
                        </svg>
                    </a>
                    <a href={'https://www.linkedin.com/in/ajay-maurya-55726b3b'} 
                            target="_blank"
                            className="footer__social--linkedin">
                        <svg className="footer__linkedin-icon">
                            <use href={socialSprite + '#icon-linkedin'}></use>
                        </svg>
                    </a>
                    <a href={'https://github.com/ajayone88/'} 
                            target="_blank" 
                            className="footer__social--github">
                        <svg className="footer__github-icon">
                            <use href={socialSprite + '#icon-github'}></use>
                        </svg>
                    </a>
               </div>
            </div>
        </footer>
        )
    }

export default footer;