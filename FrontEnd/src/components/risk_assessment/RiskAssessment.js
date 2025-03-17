import React from 'react';
import styles from './RiskAssessment.module.scss';
import RiskDetail from './RiskDetail';

const RiskAssessment = ({ riskData }) => {
  return (
    <div className={styles.riskAssessment}>
      <h2>Risk Assessment</h2>
      <RiskDetail details={riskData} />
    </div>
  );
};

export default RiskAssessment;
