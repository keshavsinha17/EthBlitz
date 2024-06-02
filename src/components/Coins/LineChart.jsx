// import React, { useEffect, useState } from 'react';
// import Chart from 'react-google-charts';
// import "./LineChart.css";

// const LineChart = ({ historicalcoinData }) => {
//     const [data, setData] = useState([["Date", "Prices"]]);

//     useEffect(() => {
//         if (historicalcoinData && historicalcoinData.prices) {
//             const dataCopy = [["Date", "Prices"]];
//             historicalcoinData.prices.forEach((item) => {
//                 const date = new Date(item[0]);
//                 const price = item[1];
//                 if (!isNaN(date) && typeof price === 'number') {
//                     dataCopy.push([date, price]);
//                 }
//             });
//             setData(dataCopy);
//         }
//     }, [historicalcoinData]);

//     return (
//         <Chart
//             chartType="LineChart"
//             data={data}
//             options={{
//                 hAxis: { title: 'Date' },
//                 vAxis: { title: 'Prices' }
//             }}
//             height="400px"
//             width="100%"
//             legendToggle
//         />
//     );
// }

// export default LineChart;

import React, { useState } from 'react';
import Chart from 'react-google-charts';
import "./LineChart.css";
import { dummyChartData } from './DummyChart';

const LineChart = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleChartSelect = (chartWrapper) => {
        const chart = chartWrapper.getChart();
        const selection = chart.getSelection();
        if (selection.length === 1) {
            const item = dummyChartData.prices[selection[0].row];
            setSelectedItem(item);
        } else {
            setSelectedItem(null);
        }
    };

    // Format date to locale string
    const formatDateString = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString();
    };

    // Format the dates in the chart data
    const chartData = [['Date', 'Price'], ...dummyChartData.prices.map(([date, price]) => [formatDateString(date), price])];

    return (
        <div>
            <Chart
                chartType="LineChart"
                data={chartData}
                options={{
                    hAxis: { title: 'Date' },
                    vAxis: { title: 'Price' },
                    explorer: {
                        actions: ['dragToZoom', 'rightClickToReset'],
                    },
                }}
                width="100%"
                height="400px"
                chartEvents={[
                    {
                        eventName: 'select',
                        callback: ({ chartWrapper }) => handleChartSelect(chartWrapper),
                    },
                ]}
            />
            {/* {selectedItem && (
                <div>
                    <h2>Selected Item:</h2>
                    <p>Date: {formatDateString(selectedItem[0])}</p>
                    <p>Price: {selectedItem[1]}</p>
                </div>
            )} */}
        </div>
    );
};

export default LineChart;
