import React from 'react';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import infosysImage from '../../images/infosys.png';
import abnamroImage from '../../images/abnamro.png';

const experience = () =>{
    return (
        <Auxillary>
            <section  id="experience" className="section__experience">
                    <h2 className="heading-secondary mg-bm-md section__experience-heading">Work Experience</h2>
                    <div className="section__experience-box">
                        <div className="section__experience-box-one">
                            <h1>Location : Amsterdam (2015 / Present)</h1>
                            <img  src={abnamroImage} alt="Company"></img>
                            <div className='Roles'>Roles and Responsibility</div>
                            <ul>
                                <li>Development Engineer ( Team Lead for frontend development )</li>
                                <li>Domain (Investment, Insurance, Savings, Test Environment Support)</li>
                                <li>Innovation / POC (Tools for Healthcheck, POC for new frame work)</li>
                                <li>Agile / Scrum </li>
                            </ul>
                        </div>
                        <div className="section__experience-box-two">
                             <h2>Location : Pune (2013 till 2015)</h2>
                             <img  src={infosysImage} alt="Company"></img>
                             <div className='Roles'>Roles and Responsibility</div>
                             <ul>
                                <li>Tibco Developer ( Offshore counter part for process layer developemnt)</li>
                                <li>Domain (Commercial Credit)</li>
                                <li>Manage Deployment of Tibco BE</li>
                                <li>Water fall setting</li>
                            </ul>
                        </div>
                    </div>
                </section>
        </Auxillary>
    )
}

export default experience;