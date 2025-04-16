import React, { useState } from 'react';

import { PicsumPhotoCard } from '@/components';
import { PicsumService } from '@/services';
import type { PicsumPhoto } from '@/types';
import '@/styles/css/PicsumPage.css';

function PicsumPage(): React.JSX.Element {
  const [photos, setPhotos] = useState<PicsumPhoto[]>([]);

  const fetchPhotos = React.useCallback(async () => {
    const result = await PicsumService.getPhotos();
    setPhotos(result);
  }, []);

  React.useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  const renderPhotoItem = (item: PicsumPhoto): React.JSX.Element => (
    <PicsumPhotoCard key={item.id} item={item} />
  );

  return <div className="photos">{photos.map(renderPhotoItem)}</div>;
}

export default React.memo(PicsumPage);
