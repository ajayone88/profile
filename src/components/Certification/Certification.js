import React from 'react';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import AWSSolutionArcitect from '../../images/aws-solution-architect.png';
import AWSDeveloper from '../../images/aws-developer.png';
import AWSPractitioner from '../../images/aws-practitioner.png';
import AzureFundamental from '../../images/azure-fundamental.png';
import Mulesoft from '../../images/mulesoft-developer.png';
import AzureDeveloper from '../../images/azure-developer.png';

const certification = () =>{
    return (
        <Auxillary>
            <section id="certifications" className="section__certification">
                <h2 className="heading-secondary mg-bm-md section__certification-heading">Certifications</h2>
                <div className="section__certification-box">
                    <figure>
                        <img src={AWSSolutionArcitect} className="section__certification__icon"/>
                        <h4>SAA-C01</h4>
                    </figure>
                    <figure>
                        <img  src={AWSDeveloper} className="section__certification__icon"/>
                        <h4>DVA-C01</h4>
                    </figure>
                    <figure>
                        <img src={AWSPractitioner} className="section__certification__icon"/>
                        <h4>CLF-C01</h4>
                    </figure>
                    <figure>
                        <img src={AzureFundamental} className="section__certification__icon"/>
                        <h4>AZ-900</h4>
                    </figure>
                    <figure>
                        <img src={AzureDeveloper} className="section__certification__icon"/>
                        <h4>AZ-204</h4>
                    </figure>
                    <figure>
                        <img src={Mulesoft} className="section__certification__icon"/>
                        <h4>Mulesoft 4</h4>
                    </figure>
                </div>
            </section>
        </Auxillary>
    )
}

export default certification;