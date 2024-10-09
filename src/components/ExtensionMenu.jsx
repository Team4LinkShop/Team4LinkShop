import { useEffect, useRef, useState } from 'react';
import icMeatBall from '../assets/images/ic-meatball.svg';
import { icContainer } from './ShareButton';
import ProfileDropDown from './ProfileDropDown';
import { css } from '@emotion/react';

function ExtensionMenu() {
  const [isDropMenuOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');

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

  const onChangePassword = (e) => {
    setPasswordInput(e.target.value);
  };

  const goToEditPage = () => {};

  return (
    <>
      <div
        ref={menu}
        css={css`
          ${icContainer};
          position: relative;
        `}
        onClick={() => setIsOpen(!isDropMenuOpen)}
      >
        <img src={icMeatBall} alt="더보기 아이콘" />
        {isDropMenuOpen && <ProfileDropDown onEditClick={openModal} />}
      </div>

      {/* 비밀번호 입력 모달창 */}
      {isModalOpen && (
        <div css={modalStyle} onClick={closeModal}>
          <div css={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <h2>비밀번호 입력</h2>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              onChange={onChangePassword}
            />
            <div css={detailPageModalBtn}>
              <button onClick={closeModal}>닫기</button>
              <button onClick={() => console.log(passwordInput)}>편집</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

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
  z-index: 1000;
`;

const modalContentStyle = css`
  background-color: #fff;
  padding: 20px;
  border-radius: 3rem;
  width: 34.3rem;
  text-align: center;
  min-height: 19.4rem;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.7rem;
    font-weight: 500;
  }

  > input {
    height: 100%;
    padding: 1.6rem 2.4rem;
    font-size: 1.6rem;
    color: #1f2937;
    background-color: #f3f4f6;
    border: none;
    border-radius: 1.2rem;

    :focus {
      outline: 1px solid #3e45ec;
    }
  }
`;

const detailPageModalBtn = css`
  display: flex;
  height: 5rem;
  margin-top: 2.4rem;
  justify-content: center;
  gap: 0.4rem;

  > button {
    font-size: 1.7rem;
    padding: 1.5rem 0;
    border-radius: 3.7rem;
    width: 35%;
    cursor: pointer;
  }
  > button:last-of-type {
    font-weight: 600;
    background-color: #3e45ec;
    color: #fff;
    border: 2px solid transparent;
  }

  > button:first-of-type {
    font-size: 1.7rem;
    border: 2px solid #3e45ec;
    background-color: #fff;
    color: #3e45ec;
  }
`;

export default ExtensionMenu;
