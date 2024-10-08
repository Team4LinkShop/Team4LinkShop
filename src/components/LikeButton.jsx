/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import icHeartBlank from '../assets/images/ic-blank-heart.svg';
import icHeartFull from '../assets/images/ic-full-heart.svg';
import { css } from '@emotion/react';
import { likeHandler } from '../api/likes';
import { likeData } from '../api/likes';

const LIKED = 'liked';

function LikeButton({ linkShopId }) {
  const [likeCount, setLikeCount] = useState(0);
  const [isLikeClicked, setIsLikeClicked] = useState(
    () => JSON.parse(window.localStorage.getItem(LIKED)) || false
  );

  useEffect(() => {
    (async () => {
      const result = await likeHandler(linkShopId);
      if (result) {
        setLikeCount(result);
      }
    })();
  }, []);

  useEffect(() => {
    window.localStorage.setItem(LIKED, JSON.stringify(isLikeClicked));
  }, [isLikeClicked]);

  const handleClick = async () => {
    if (isLikeClicked) {
      setIsLikeClicked(false);
      if (await likeData(linkShopId, false)) {
        const result = await likeHandler(linkShopId);
        if (result) {
          setLikeCount(result);
        }
      }
    } else {
      setIsLikeClicked(true);
      if (await likeData(linkShopId, true)) {
        const result = await likeHandler(linkShopId);
        if (result) {
          setLikeCount(result);
        }
      }
    }
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
