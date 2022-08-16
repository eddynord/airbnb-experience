import React from 'react';
import CardOne from './img/card_one.png'
import StarIcon from './img/star.png'





export default Card 
function Card() {
    return(
        <section className='card-section'>
            <div className='card-content'>
                <div className='card_one'>
                    <img src={CardOne} alt='Katie Zafares'/>
                    <div className='card-info'>
                        <img src={StarIcon} alt='Star'/>
                        <small>5.0 (6) · USA</small>
                    </div>

                    <div className='card-one-title'>
                        <p>Life lessons with Katie Zaferes</p>
                        <p><strong>From $136 </strong>/person</p>
                    </div>
                </div>
                   
            </div>
        </section>

    )
}