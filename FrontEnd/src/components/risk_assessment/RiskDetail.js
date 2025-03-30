
import React from 'react';

const RiskDetail = ({ details }) => {
  return (
    <div>
      {details ? (
        <pre>{JSON.stringify(details, null, 2)}</pre>
      ) : (
        <p>No risk details available.</p>
      )}
    </div>
  );
};

export default RiskDetail;
