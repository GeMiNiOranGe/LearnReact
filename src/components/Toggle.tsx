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

  let toggleSize = 48;

  if (size === 'medium') {
    toggleSize = 36;
  }

  if (size === 'small') {
    toggleSize = 24;
  }

  return (
    <div
      className={`toggle ${isOn ? 'active' : ''}`}
      style={{ '--toggle-size': `${toggleSize}px` } as React.CSSProperties}
      onClick={onToggle}
    >
      <div className={`spinner ${isOn ? 'active' : ''}`} />
    </div>
  );
}

export default React.memo(Toggle);
