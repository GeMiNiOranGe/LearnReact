import React, { useCallback, useEffect, useState } from 'react';

import YoutubeVideos from '@/.mock/YoutubeVideos';
import { YoutubeCard } from '@/components';
import { TicTacToePage, WelcomePage } from '@/pages';
import { YoutubeCardProps } from '@/types/PropsTypes';
import '@/App.css';

function App(): React.JSX.Element {
  const [videos, setVideos] = useState<YoutubeCardProps[]>([]);

  const fetchVideos = useCallback(() => {
    const result = YoutubeVideos;
    setVideos(result);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(fetchVideos, 2000);

    return (): void => {
      clearTimeout(timeout);
    };
  }, [fetchVideos]);

  const renderVideoItem = (item: YoutubeCardProps): React.JSX.Element => (
    <YoutubeCard key={item.videoId} videoId={item.videoId} title={item.title} />
  );

  return (
    <>
      <TicTacToePage />

      <WelcomePage />

      <div className="videos">{videos.map(renderVideoItem)}</div>
    </>
  );
}

export default React.memo(App);
