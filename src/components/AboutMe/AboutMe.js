import React from 'react';
import Auxillary from '../../hoc/Auxillary/Auxillary';
const aboutMe = (props) => {
    return(
        <Auxillary>
            <section id="aboutMe" className="section__aboutMe">
                <h2 className="heading-secondary mg-bm-md section__aboutMe-heading">About Me</h2>
                <div className="section__aboutMe-box">
                  <ul>
                      <li>I am from <strong>India</strong>, I was born and brought up in Mumbai Maharashtra, Mumbai is also known as <strong>city of dreams</strong>, Mumbai teaches everyday something new, I celebrate my birthday on <strong>31st of October 1988</strong> of course I was born on that day. Currently I am residing in Amstelveen <strong>(Netherland)</strong>.</li>
                      <li>I like <strong>challenges</strong> and I am always interested in discussing <strong>innovative ideas</strong>, I like to keep myself up-to-date on the <strong>latest technologies</strong>, I am a <strong>cloud enthusiast</strong> I always try to explore more and more on cloud services.</li>
                      <li>I am <strong>vegetarian</strong> and yes vegetarian can also be foodies, I am not a good cook but sometimes we have to forget about it and do the cooking, I like playing badminton to keep myself <strong>active and healthy</strong>, I also like playing mobile games like PUBG.</li>
                  </ul>
                </div>
            </section>
        </Auxillary>
    )
}

export default aboutMe;
