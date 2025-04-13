import React, { useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import YoutubeVideos from '@/.mock/YoutubeVideos';
import { YoutubeCard } from '@/components';
import { TicTacToePage, WelcomePage } from '@/pages';
import type { YoutubeVideo } from '@/types';
import theme from '@/styles/theme';
import '@/styles/css/App.css';

function App(): React.JSX.Element {
  const [videos, setVideos] = useState<YoutubeVideo[]>([]);

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

  const renderVideoItem = (item: YoutubeVideo): React.JSX.Element => (
    <YoutubeCard key={item.videoId} item={item} />
  );

  return (
    <ThemeProvider theme={theme}>
      <TicTacToePage />

      <WelcomePage />

      <div className="videos">{videos.map(renderVideoItem)}</div>
    </ThemeProvider>
  );
}

export default React.memo(App);
