import React, { useContext } from 'react'
import "./Navbar.css";
import logo from "../../assets/logo.png"
import arrow_icon from "../../assets/arrow_icon.png"
import { CoinContext } from '../../context/CoinContext';
const Navbar = () => {
    const { setCurrency } = useContext(CoinContext);
    const currencyHandler = (event) => {
        switch (event.target.value) {
            case "usd": {
                setCurrency({
                    name: "usd",
                    symbol: "$"
                })
                break;
            }
            case "inr": {
                setCurrency({
                    name: "inr",
                    symbol: "₹"
                })
                break;
            }
            case "eur": {
                setCurrency({
                    name: "eur",
                    symbol: "€"
                })
                break;
            }
            default: {
                setCurrency({ name: "usd", symbol: "$" })
            }

        }
    }
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
                    <select onChange={currencyHandler}>
                        <option value='usd'>USD</option>
                        <option value='inr'>INR</option>
                        <option value='eur'>EUR</option>
                    </select>
                    <button>Sign-IN
                        <img src={arrow_icon}></img>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Navbar
