import React from 'react';

import YoutubeVideos from '@/.mock/YoutubeVideos';
import { YoutubeCard } from '@/components';
import type { YoutubeVideo } from '@/types';
import '@/styles/css/YoutubePage.css';

function YoutubePage(): React.JSX.Element {
  const [videos, setVideos] = React.useState<YoutubeVideo[]>([]);

  const fetchVideos = React.useCallback(() => {
    const result = YoutubeVideos;
    setVideos(result);
  }, []);

  React.useEffect(() => {
    const timeout = setTimeout(fetchVideos, 2000);

    return (): void => {
      clearTimeout(timeout);
    };
  }, [fetchVideos]);

  const renderVideoItem = (item: YoutubeVideo): React.JSX.Element => (
    <YoutubeCard key={item.videoId} item={item} />
  );

  return <div className="videos">{videos.map(renderVideoItem)}</div>;
}

export default React.memo(YoutubePage);
