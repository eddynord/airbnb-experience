import React from 'react';
import './index.css';
import hero from './img/hero.png'


export default Banner

function Banner() {
    return(
        <section>
            <div className='banner-section'>
                <div className='hero-section'>
                    <img src={hero} alt='Hero'/>
                </div>

                <div className='desc'>
                    <h1>Online Experiences</h1>
                    <p>Join unique interactive activities led by one-of-a-kind hosts—all 
                        without leaving home.</p>
                </div>
            </div>
        </section>

    )
}
