import styled from 'styled-components';

const thumbnailWidth = 45;

const StyledCard = {
  Link: styled.a`
    text-decoration: none;
    color: black;
    width: ${thumbnailWidth}vh;
    margin-bottom: 1.5rem;
  `,

  Thumbnail: styled.img`
    width: ${thumbnailWidth}vh;
    height: ${(thumbnailWidth / 16) * 9}vh;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
  `,

  Content: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,

  AuthorImage: styled.img`
    height: 3rem;
    border-radius: 50%;
  `,

  TitleBox: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
  `,

  AuthorName: styled.span`
    font-size: 0.875rem;
    color: gray;
  `,
};

export default StyledCard;
