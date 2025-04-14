// src/components/charts/VitalSignsChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const VitalSignsChart = ({ data }) => {
  // Prepare the chart data format
  const chartData = {
    labels: data.timestamps, // e.g: array of timestamps
    datasets: [
      {
        label: 'Heart Rate',
        data: data.heartRates, // e.g., array of heart rate values
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
      // Add other datasets if needed (e.g., blood pressure, etc.)
    ],
  };

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default VitalSignsChart;
