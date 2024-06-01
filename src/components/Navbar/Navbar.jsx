import React from 'react'
import "./Navbar.css";
import logo from "../../assets/logo.png"
import arrow_icon from "../../assets/arrow_icon.png"
const Navbar = () => {
    return (
        <div>
            <div className='navbar'>
                <img
                    src={logo}
                    alt='logo'
                    className='logo'></img>
                <ul>
                    <li>Home</li>
                    <li>Watchlist</li>
                    <li>Transactions</li>
                    <li>Portfolio</li>
                </ul>
                <div className='nav-right'>
                    <select>
                        <option value='USD'>USD</option>
                        <option value='USD'>INR</option>
                        <option value='USD'>EUR</option>
                    </select>
                    <button>Sign-IN
                    <img src={arrow_icon    }></img>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Navbar
