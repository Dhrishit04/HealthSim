import React, { useState, useEffect } from 'react';
import styles from './RiskAssessment.module.scss';
import RiskDetail from './RiskDetail';
import { getRiskAssessment } from '../../services/riskService';

const RiskAssessment = () => {
  const [riskData, setRiskData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRiskData = async () => {
      try {
        const data = await getRiskAssessment();
        setRiskData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRiskData();
  }, []);

  if (loading) return <div>Loading risk assessment...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={styles.riskAssessment}>
      <h2>Risk Assessment</h2>
      <RiskDetail details={riskData} />
    </div>
  );
};

export default RiskAssessment;
