import React from 'react';

import logo from '../../assets/icons/logo.svg';
import './style.css';

function WelcomePage(): React.JSX.Element {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

export default WelcomePage;
