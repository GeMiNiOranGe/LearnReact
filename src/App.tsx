import React, { useCallback, useEffect, useState } from 'react';

import YoutubeVideos from '@/.mock/YoutubeVideos';
import { YoutubeCard } from '@/components';
import { WelcomePage } from '@/pages';
import { YoutubeCardProps } from '@/types/PropsTypes';
import '@/App.css';

function App(): React.JSX.Element {
  const [videos, setVideos] = useState<YoutubeCardProps[]>([]);

  useEffect(() => {
    const timeout = setTimeout(fetchVideos, 2000);

    return (): void => {
      clearTimeout(timeout);
    };
  }, []);

  const fetchVideos = useCallback(() => {
    const result = YoutubeVideos;
    setVideos(result);
  }, []);

  const renderYoutubeCardItem = (item: YoutubeCardProps): React.JSX.Element => (
    <YoutubeCard key={item.videoId} videoId={item.videoId} title={item.title} />
  );

  return (
    <>
      <WelcomePage />

      <div className="videos">{videos.map(renderYoutubeCardItem)}</div>
    </>
  );
}

export default App;
