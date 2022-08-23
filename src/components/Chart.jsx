import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import moment from 'moment';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

function Chart(props) {

    const [chart, setChart] = useState([]);
    const url = `https://api.coingecko.com/api/v3/coins/${props.coin.coinId}/market_chart?vs_currency=usd&days=30`;

    useEffect(() => {
        axios.get(url).then((res) => {
        setChart(res.data.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) })));
        }).catch((error) => {
        console.log(error);
        })
    }, []);
  
    const options = {
        responsive: true
    }
    const data = {
        labels: chart.map(value => moment(value.x).format('MMM DD')),
        datasets: [
        {
            fill: true,
            label: props.coin.coinId,
            data: chart.map(val => val.y),
            borderColor: '#2081c3',
            backgroundColor: 'rgba(120, 213, 215, 0.5)',
        }
        ]
    }

    return (
        <div>
            <Line options={options} data={data} />
        </div>
    );
}

export default Chart