import React from 'react';
import logoImport from './logoImport.svg'

const Import = () => {
  return (
    <div>
      <h2>
        SVG <code>import</code> in React.
      </h2>
      <img src={logoImport} className="logo" alt="logo"/>
    </div>
  );
};

export default Import;
