//src/components/charts/RiskScoreChart.js

import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './charts.module.scss';  
const RiskScoreChart = ({ data, options }) => {
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RiskScoreChart;
