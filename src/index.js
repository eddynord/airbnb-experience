import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header'
import Banner from './Banner';
import Card from './Card';
import Data from './Data';



function Container(props) {
  const cardData = Data.map(items => {
    return <Card  


                  key = {items.id}
                  {...items} // SAME AS PASSING .items to the props or use items={items}
                  //
                  // image = {items.coverImg}
                  // title = {items.title}
                  // price = {items.price}
                  // location = {items.location}
                  // rating = {items.stats.rating}
                  // reviewCount = {items.stats.reviewCount}
                  // openSpots = {items.openSpots}
            />
                  
    })
  
    return (
    <div>
        <Header/>
        <Banner/>
        <div className='card-flex'>
          {cardData}
        </div>
          
    </div>
  )
}





          

      
        

      
//     </div>
    
//   )
// }

// function App() {
//   const date = new Date()
//   const hours = date.getHours()
//   let timeOfDay

//   if (hours < 12) {
//     timeOfDay = 'morning'
//   }  (hours >= 12 && hours < 17) {
//     timeOfDay = 'afternoon'
//   } else {
//     timeOfDay = 'night'
//   }

// }




ReactDOM.createRoot(document.getElementById('root')).render(<Container/>);

