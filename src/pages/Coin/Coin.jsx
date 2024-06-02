import React, { useContext, useEffect, useState } from 'react';
import "./Coin.css";
import { useParams } from 'react-router-dom';
import { CoinContext } from '../../context/CoinContext';
import LineChart from '../../components/Coins/LineChart';

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null); // Correctly initialize state
  const [historicalcoinData, sethistoricalCoinData] = useState(null); // Correctly initialize state
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-yWjSF14LoNdKatQ9CHtn7Pdx'
      }
    };

    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options);
      const data = await response.json();
      console.log(data);  // Check the data in console
      setCoinData(data);  // Set the fetched data to state
    } catch (err) {
      console.error('Error fetching coin data:', err);
    }
  };




  // coin Data section ends here
  const fetchHistoricalData = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-yWjSF14LoNdKatQ9CHtn7Pdx' }
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=1`, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .then(response => sethistoricalCoinData(response))
      .catch(err => console.error(err));
  }
  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency]);
  if (coinData) {
    return (
      <div className='coin'>
        <div className='coin-name'>
          <img src={coinData.image.large} />
          <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
        </div>
        <div className='coin-chart'>
          {/* <LineChart historicalcoinData={historicalcoinData} /> */}
          <LineChart/>
        </div>
        <div className='coin-info'>
          <ul>
            <li>Crypto Market Rank</li>
            <li>{coinData.market_cap_rank}</li>
          </ul>
          <ul>
            <li>Current Price</li>
            <li>{currency.symbol} {coinData.market_data.current_price[currency.name]}</li>
          </ul>
          <ul>
            <li>Market Cap</li>
            <li>{currency.symbol} {coinData.market_data.market_cap[currency.name]}</li>
          </ul>
          <ul>
            <li>24 Hour High</li>
            <li>{currency.symbol} {coinData.market_data.high_24h[currency.name]}</li>
          </ul>
          <ul>
          <li>24 Hour Low</li>
            <li>{currency.symbol} {coinData.market_data.low_24h[currency.name]}</li>
          </ul>
        </div>
      </div>
    );

  }
  else{
    return (
      <div className='loader'>
        <div className='loading'></div>
      </div>
    )}


}

export default Coin;
