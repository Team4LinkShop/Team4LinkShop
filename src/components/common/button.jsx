/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const buttonContainerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const completeButtonStyle = css`
  width: 696px;
  padding: 10px 20px;
  background-color: #a2a2ac;
  color: white;
  border: none;
  border-radius: 37px;
  cursor: pointer;
  font-size: 17px;
`;

function CompleteButton() {
  return (
    <div css={buttonContainerStyle}>
      <button css={completeButtonStyle}>완료하기</button>
    </div>
  );
}

export default CompleteButton;
