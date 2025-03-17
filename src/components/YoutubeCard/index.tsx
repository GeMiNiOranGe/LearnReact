import React from 'react';

import './style.css';

export type YoutubeCardProps = {
  videoId: string;
  title: string;
};

function YoutubeCard({ videoId, title }: YoutubeCardProps): React.JSX.Element {
  return (
    <a className="link" href={`https://www.youtube.com/watch?v=${videoId}`}>
      <img
        className="image"
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt="Youtube image"
      />

      <p className="title">{title}</p>
    </a>
  );
}

export default YoutubeCard;
