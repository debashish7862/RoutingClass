
import React from 'react'
import './nav.css'
export default function Nav() {
  return (
    <div className='nav'>
        <div id='title'> <h2>React Context</h2></div>
       
        <div id='menue'>
            <a href="">Home</a>
            <a href="">Profile</a>
            <a href="">Products</a>
            <a href="">Support</a>
          
        </div>
        <div>
            <button>Logout</button>
        </div>
    </div>
    
    
  )
}

