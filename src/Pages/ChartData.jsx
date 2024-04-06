

// ChartData.jsx
import React from "react";
import { Chart } from "react-google-charts";
import {useNavigate} from 'react-router-dom'

export function ChartData({ expenses }) {


    let navigate = useNavigate();
    function clickHandler() 
    {
        navigate('/');
    }
    const options = {
        
        pieHole: 0.4,
        is3D: true,
        backgroundColor: "#111827",
        titleTextStyle: {
            color: 'white',
            fontSize: 18,
            bold: true
        },
        legendTextStyle: {
            color: 'white',
            fontSize: 14,
            bold: true
        }
    };

    const data = [
        ["Category", "Expenses"]
    ];

    for (let key in expenses) {
        data.push([key, expenses[key]]);
    }

    return (
        <div className="h-full w-full bg-[#111827]">
            <h1 className="font-bold text-xl mt-10">Your Data</h1>
            <Chart
                chartType="PieChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
            <button
                onClick={clickHandler}
                className="ml-4 px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500 hover:border border-white"
            >
                Thank You !!
            </button>
        </div>
    );
}

export default ChartData;
