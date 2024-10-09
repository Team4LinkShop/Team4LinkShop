/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const buttonContainerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const completeButtonStyle = (isActive) => css`
  width: 696px;
  padding: 10px 20px;
  background-color: ${isActive ? '#3e45ec' : '#a2a2ac'};
  color: white;
  border: none;
  border-radius: 37px;
  cursor: ${isActive ? 'pointer' : 'not-allowed'};
  font-size: 17px;
`;

const modalStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const modalContentStyle = css`
  width: 343px;
  height: 172px;
  background-color: white;
  padding: 20px;
  border-radius: 30px;
  text-align: center;
  font-size: 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const confirmButtonStyle = css`
  width: 160px;
  height: 50px;
  background-color: #3e45ec;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 17px;
  margin-top: 20px;
`;

const CompleteButton = ({ isActive }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (isActive) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/ProfilDetailPage');
  };

  return (
    <div>
      <div css={buttonContainerStyle}>
        <button css={completeButtonStyle(isActive)} onClick={handleClick} disabled={!isActive}>
          완료하기
        </button>
      </div>

      {isModalOpen && (
        <div css={modalStyle}>
          <div css={modalContentStyle}>
            <p>등록이 완료되었습니다</p>
            <button css={confirmButtonStyle} onClick={closeModal}>
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompleteButton;
