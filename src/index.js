import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header'
import Banner from './Banner';
import Card from './Card';



function Container() {
  return (
    <div className='wrapper'>
      <Header/>
      <Banner/>
      <Card/>
    </div>
    
  )
}




ReactDOM.createRoot(document.getElementById('root')).render(<Container/>);

