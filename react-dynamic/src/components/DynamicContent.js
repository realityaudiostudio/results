import React from 'react';

const DynamicContent = ({ data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.detail}</p>
      {/* Render other content based on your data structure */}
    </div>
  );
};

export default DynamicContent;
