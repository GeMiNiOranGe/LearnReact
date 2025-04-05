import React from 'react';

import { ButtonProps } from '@/types/PropsTypes';
import { determineComponent } from '@/utilities';
import '@/styles/Button.css';

function Button({
  className,
  Icon,
  label,
  onClick,
}: ButtonProps): React.JSX.Element {
  const IconComponent = determineComponent(Icon);

  return (
    <button className={className} onClick={onClick}>
      {IconComponent && IconComponent}
      <span>{label}</span>
    </button>
  );
}

export default React.memo(Button);
