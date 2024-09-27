/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import icHeartBlank from '../assets/ic-blank-heart.svg';
import icHeartFull from '../assets/ic-full-heart.svg';
import { css } from '@emotion/react';

function LikeButton() {
  const [likeCount, setLikeCount] = useState(
    () => JSON.parse(window.localStorage.getItem('likeCount')) || 0
  );
  const [isLikeClicked, setIsLikeClicked] = useState(false);

  useEffect(() => {
    window.localStorage.setItem('liked', JSON.stringify(isLikeClicked));
  }, [isLikeClicked]);

  const handleClick = () => {
    if (isLikeClicked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLikeClicked(!isLikeClicked);
  };

  return (
    <div css={icContainerHeart}>
      <button
        onClick={handleClick}
        css={css`
          background: inherit;
          border: none;
          box-shadow: none;
          border-radius: 0;
          padding: 0;
          overflow: visible;
          cursor: pointer;
          height: 2.3rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        `}>
        {isLikeClicked ? (
          <img src={icHeartFull} alt="좋아요 누른 아이콘" />
        ) : (
          <img src={icHeartBlank} alt="좋아요 아이콘" />
        )}
        <span>{likeCount}</span>
      </button>
    </div>
  );
}

const icContainerHeart = css`
  width: max-content;

  img {
    width: 2.3rem;
    height: 2.3rem;
  }

  span {
    font-size: 1.6rem;
    font-weight: 500;
    color: #14151a;
  }
`;

export default LikeButton;
