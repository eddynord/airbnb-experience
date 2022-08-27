import React from 'react';
// import CardOne from './img/card_one.png'
// import CardTwo from './img/card_two.png'
// import CardThree from './img/card_three.png'
import StarIcon from './img/star.png'






export default Card 
function Card(props) {
    let badgeText
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === 'Online') {
        badgeText = "ONLINE"
    }



    return(
        <section className='card-section'>
            <div className='card-content'>
                <div className='card_one'>
                    {badgeText && <div className='card-badge'>{badgeText}</div>}
                    
                    <img src={props.coverImg} alt='Katie Zafares'/>
                    <div className='card-info'>
                        <img src={StarIcon} alt='Star'/>
                        <small>{props.stats.rating} ({props.stats.reviewCount}) · {props.location}</small>
                    </div>

                    <div className='card-one-title'>
                        <p>{props.title}</p>
                        <p><strong>From ${props.price}</strong>/person</p>
                    </div>
                </div>
                   
            </div>
        </section>
    )
}
