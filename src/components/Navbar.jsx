import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <Link to="/">
        <div className="navbar">
            <h1 className="title">CryptoStats</h1>
        </div>
    </Link>
  )
}

export default Navbar