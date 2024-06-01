import React from 'react'
import "./Home.css";
const Home = () => {
    return (
        <div className='home'>
            <div className='hero'>
                <h1>Virtual<br />Crypto MarketPlace</h1>
                <p>Welcome to Forge of doing Dummy Crypto Transaction and Trades with real risk involved
                    without putting your credits at stake.Sign up now!!</p>
                <form>
                    <input type='text' placeholder='Search Coin'></input>
                    <button type='submit'>Search</button>
                </form>
            </div>
            <div className='crypto-table'>
                <div className='table-layout'>
                    <p>#</p>
                    <p>Coins</p>
                    <p>Price</p>
                    <p style={{textAlign:'center'}}>24hr Change</p>
                    <p className='market-cap'>Market Cap</p>
                </div>

            </div>
        </div>
    )
}

export default Home
