import React from 'react';
import {ReactComponent as Logo} from './logoReactComponentImport.svg';

const ReactComponentImport = () => {
  return (
    <div>
      <h2>
        SVG <code>ReactComponent</code> in React.
      </h2>
      <Logo
        fill="red"
        stroke="green"
        strokeWidth="5"
        className="logo"
      />
    </div>
  );
};

export default ReactComponentImport;
