import React from 'react';
import './History.scss';

const History = () => {
  return (
    <div className="historyContainer">
      <header className="historyHeader">
        <h1>History</h1>
      </header>
      <section className="historyContent">
        <p>Review your historical health data and insights over time.</p>
        <div className="chartPlaceholder">
          Chart placeholder for historical data...
        </div>
      </section>
    </div>
  );
};

export default History;
