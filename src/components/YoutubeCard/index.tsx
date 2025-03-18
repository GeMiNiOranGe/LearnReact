import React from 'react';

import { YoutubeCardProps } from '../../types/PropsTypes';
import './style.css';

function YoutubeCard({ videoId, title }: YoutubeCardProps): React.JSX.Element {
  return (
    <a className="card" href={`https://www.youtube.com/watch?v=${videoId}`}>
      <img
        className="image"
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt="Youtube image"
      />

      <p>{title}</p>
    </a>
  );
}

export default YoutubeCard;
