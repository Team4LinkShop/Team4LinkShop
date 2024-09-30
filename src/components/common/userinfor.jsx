/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Field = css`
  width: 100%;
  max-width: 696px;
  height: 87px;
  margin: 10px auto;
`;

const FieldStyle = css`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 8px;
  font-size: 14px;
  border: 0px;
  border-radius: 25px;
  background-color: #fafafb;
  box-sizing: border-box;
  justify-content: center;
  align-items: start;
`;

const inputStyle = css`
  width: 100%;
  margin: 5px auto;
  font-size: 16px;
  background-color: #fafafb;
  border: 0px;
  outline: none;
`;

export function Name() {
  return (
    <div css={Field}>
      <label css={FieldStyle}>
        이름
        <input type="text" placeholder="표시하고 싶은 이름을 적어 주세요" css={inputStyle} />
      </label>
    </div>
  );
}

export function Id() {
  return (
    <div css={Field}>
      <label css={FieldStyle}>
        아이디
        <input type="text" placeholder="URL로 사용될 아이디를 입력해주세요" css={inputStyle} />
      </label>
    </div>
  );
}

export function Password() {
  return (
    <div css={Field}>
      <label css={FieldStyle}>
        비밀번호
        <input type="text" placeholder="영문+숫자 6자 이상을 입력해주세요" css={inputStyle} />
      </label>
    </div>
  );
}
