/** @jsxImportSource @emotion/react */

import { useEffect, useRef, useState } from 'react';
import icMeatBall from '../assets/images/ic-meatball.svg';
import { icContainer } from './ShareButton';
import ProfileDropDown from './ProfileDropDown';
import { css } from '@emotion/react';

function MeatballButton() {
  const [isDropMenuOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menu = useRef(null);

  useEffect(() => {
    const handleCloseMenu = (e) => {
      if (isDropMenuOpen && !menu.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleCloseMenu);

    return () => {
      document.removeEventListener('mousedown', handleCloseMenu);
    };
  }, [isDropMenuOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        ref={menu}
        css={css`
          ${icContainer};
          position: relative;
        `}
        onClick={() => setIsOpen(!isDropMenuOpen)}>
        <img src={icMeatBall} alt="더보기 아이콘" />
        {isDropMenuOpen && <ProfileDropDown onEditClick={openModal} />}
      </div>

      {/* 비밀번호 입력 모달창 */}
      {isModalOpen && (
        <div css={modalStyle}>
          <div css={modalContentStyle}>
            <h2>비밀번호 입력</h2>
            <input type="password" placeholder="비밀번호를 입력하세요" />
            <button onClick={closeModal}>닫기</button>
          </div>
        </div>
      )}
    </>
  );
}

// 모달 CSS 스타일 (Emotion 사용)
const modalStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 모달이 다른 요소 위에 나타나도록 설정 */
`;

const modalContentStyle = css`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
`;

export default MeatballButton;
