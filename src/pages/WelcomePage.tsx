import React, { useCallback, useState } from 'react';

import logo from '@/assets/icons/logo.svg';
import { Toggle } from '@/components';
import '@/styles/css/WelcomePage.css';

function WelcomePage(): React.JSX.Element {
  const [isLightMode, setIsLightMode] = useState(false);

  const onToggleChange = useCallback((event: boolean) => {
    setIsLightMode(event);
  }, []);

  return (
    <header
      className="header"
      style={{
        backgroundColor: isLightMode ? '#f8f8f8' : '#282c34',
        color: isLightMode ? 'black' : 'white',
      }}
    >
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

      <div className="toggle-box">
        <p className="toggle-text">Switch to light mode?</p>

        <Toggle size="small" onChange={onToggleChange} />
      </div>
    </header>
  );
}

export default React.memo(WelcomePage);
