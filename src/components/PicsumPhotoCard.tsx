import React from 'react';

import type { PicsumPhotoCardProps } from '@/types';
import '@/styles/css/PicsumPhotoCard.css';

function PicsumPhotoCard({ item }: PicsumPhotoCardProps): React.JSX.Element {
  return (
    <div key={item.id}>
      <img className="photo" src={item.download_url} alt={item.author} />
    </div>
  );
}

export default React.memo(PicsumPhotoCard);
