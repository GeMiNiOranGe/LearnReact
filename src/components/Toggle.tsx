import React, { useCallback, useState } from 'react';

import type { ToggleProps } from '@/types';
import '@/styles/Toggle.css';

function Toggle({ size = 'small', onChange }: ToggleProps): React.JSX.Element {
  const [isOn, setIsOn] = useState(false);

  const onToggle = useCallback(() => {
    const newIsOnState = !isOn;

    setIsOn(newIsOnState);
    if (onChange) {
      onChange(newIsOnState);
    }
  }, [isOn, onChange]);

  const toggleSize = size === 'small' ? 24 : size === 'medium' ? 48 : 96;
  const togglePadding = size === 'large' ? 8 : 4;

  return (
    <div
      className={`toggle ${isOn ? 'active' : ''}`}
      style={
        {
          '--toggle-size': `${toggleSize}px`,
          padding: `${togglePadding}px`,
        } as React.CSSProperties
      }
      onClick={onToggle}
    >
      <div className={`spinner ${isOn ? 'active' : ''}`}></div>
    </div>
  );
}

export default React.memo(Toggle);
