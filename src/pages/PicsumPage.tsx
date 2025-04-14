import React, { useState } from 'react';

import { PicsumService } from '@/services';
import type { PicsumPhoto } from '@/types';

function PicsumPage(): React.JSX.Element {
  const [photos, setPhotos] = useState<PicsumPhoto[]>([]);

  const fetchPhotos = React.useCallback(async () => {
    const result = await PicsumService.getPhotos();
    setPhotos(result);
  }, []);

  React.useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  return <div className="container">{JSON.stringify(photos)}</div>;
}

export default React.memo(PicsumPage);
