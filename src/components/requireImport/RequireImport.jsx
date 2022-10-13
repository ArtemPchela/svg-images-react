import React from 'react';

const RequireImport = () => {
  return (
    <>
      <h2>
        SVG <code>require</code> in React.
      </h2>
      <img src={require(`./logoRequireImport.svg`).default} className="logo" alt="logo"/>
    </>
  );
};

export default RequireImport;
