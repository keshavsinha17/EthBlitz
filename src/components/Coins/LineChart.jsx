import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import "./LineChart.css";

const LineChart = ({ historicalcoinData }) => {
    const [data, setData] = useState([["Date", "Prices"]]);

    useEffect(() => {
        if (historicalcoinData && historicalcoinData.prices) {
            const dataCopy = [["Date", "Prices"]];
            historicalcoinData.prices.forEach((item) => {
                const date = new Date(item[0]);
                const price = item[1];
                if (!isNaN(date) && typeof price === 'number') {
                    dataCopy.push([date, price]);
                }
            });
            setData(dataCopy);
        }
    }, [historicalcoinData]);

    return (
        <Chart
            chartType="LineChart"
            data={data}
            options={{
                hAxis: { title: 'Date' },
                vAxis: { title: 'Prices' }
            }}
            height="400px"
            width="100%"
            legendToggle
        />
    );
}

export default LineChart;
