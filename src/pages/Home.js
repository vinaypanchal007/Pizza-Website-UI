import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles/home.css'

function Home() {
  return (
    <div className="home">
      <div 
      className='headContainer'>
        <h1>ITALIAN PIZZA'Z</h1>
        <p>Italian Pizza'z at your home</p>
        <Link to='/menu'>
          <button>
            Order Now
          </button>
        </Link>
      </div>
    </div>
  )
} 

export default Home
