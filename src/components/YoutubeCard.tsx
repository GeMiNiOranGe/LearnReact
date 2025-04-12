import React from 'react';

import type { YoutubeCardProps } from '@/types';
import StyledCard from '@/styles/styled/YoutubeCard';

function YoutubeCard({ key, item }: YoutubeCardProps): React.JSX.Element {
  return (
    <StyledCard.Link
      key={key}
      href={`https://www.youtube.com/watch?v=${item.videoId}`}
    >
      <StyledCard.Thumbnail
        src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
        alt="Thumbnail"
      />

      <StyledCard.Content>
        <StyledCard.AuthorImage
          src={`https://yt3.googleusercontent.com/${item.authorImage}`}
          alt="Author image"
        />

        <StyledCard.TitleBox>
          <span>{item.title}</span>

          <StyledCard.AuthorName>{item.authorName}</StyledCard.AuthorName>
        </StyledCard.TitleBox>
      </StyledCard.Content>
    </StyledCard.Link>
  );
}

export default React.memo(YoutubeCard);
