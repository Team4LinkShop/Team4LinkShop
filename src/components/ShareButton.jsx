/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import icShare from '../assets/images/ic-share.svg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ShareButton({ linkShopId }) {
  const fullURL = window.location.href;

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('링크가 복사되었습니다.');
    } catch (error) {
      alert('복사에 실패하였습니다.');
      toast.error('링크 복사를 실패하였습니다');
    }
  };

  return (
    <>
      <div css={icContainer}>
        <div
          onClick={() => {
            handleCopyClipBoard(`${fullURL}link/${linkShopId}`);
          }}>
          <img src={icShare} alt="공유하기 아이콘" />
        </div>
      </div>
    </>
  );
}

export const icContainer = css`
  cursor: pointer;

  > img {
    width: 2.3rem;
    height: 2.3rem;
  }
`;

export default ShareButton;
