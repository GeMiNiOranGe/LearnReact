import React from 'react';
import { NavArrowDown } from 'iconoir-react';

import { Button, PicsumPhotoCard } from '@/components';
import { PicsumService } from '@/services';
import type { PicsumPhoto } from '@/types';
import '@/styles/css/PicsumPage.css';

function PicsumPage(): React.JSX.Element {
  const [photos, setPhotos] = React.useState<PicsumPhoto[]>([]);
  const [nextPage, setNextPage] = React.useState(2);

  const fetchPhotos = React.useCallback(async () => {
    const result = await PicsumService.getPhotos();
    setPhotos(result);
  }, []);

  const fetchNextPhotos = React.useCallback(async () => {
    const result = await PicsumService.getPhotos(nextPage);
    setPhotos([...photos, ...result]);
    setNextPage(nextPage + 1);
  }, [nextPage, photos]);

  React.useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  const onLoadMoreClick = React.useCallback(() => {
    fetchNextPhotos();
  }, [fetchNextPhotos]);

  const renderPhotoItem = (item: PicsumPhoto): React.JSX.Element => (
    <PicsumPhotoCard key={item.id} item={item} />
  );

  return (
    <div>
      <div className="photos">{photos.map(renderPhotoItem)}</div>

      <div className="load-button-box">
        <Button
          className="load-button"
          label="Load more"
          Icon={NavArrowDown}
          onClick={onLoadMoreClick}
        />
      </div>
    </div>
  );
}

export default React.memo(PicsumPage);
