/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
import closeeye from '../../assets/images/closeeye.png';
import openeye from '../../assets/images/openeye.png';

// 필드 스타일
const Field = css`
  width: 100%;
  max-width: 696px;
  margin: 10px auto;
`;

const FieldStyle = css`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px;
  font-size: 14px;
  border-radius: 25px;
  background-color: #fafafb;
  box-sizing: border-box;
  justify-content: start;
  align-items: start;
  position: relative;
`;

const labelErrorStyle = css`
  border: 1px solid red;
`;

const inputStyle = css`
  width: 100%;
  margin: 5px auto;
  font-size: 16px;
  background-color: #fafafb;
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
`;

const labelTextStyle = css`
  margin-left: 10px;
`;

const eyeIconStyle = css`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;

const errorMessageStyle = css`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  padding-left: 10px;
`;

// 아이디 입력 필드
export function Id() {
  const [id, setId] = useState('');
  const [error, setError] = useState(false);

  const validateId = () => {
    const regex = /[^\w가-힣]/;
    if (regex.test(id)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div css={Field}>
      <label css={[FieldStyle, error && labelErrorStyle]}>
        <span css={labelTextStyle}>아이디</span>
        <input
          type="text"
          placeholder="URL로 사용될 아이디를 입력해주세요"
          css={inputStyle}
          value={id}
          onChange={(e) => setId(e.target.value)}
          onBlur={validateId}
        />
      </label>
      {error && (
        <span css={errorMessageStyle}>아이디에 띄어쓰기, 특수기호를 사용할 수 없습니다.</span>
      )}
    </div>
  );
}

// 이름 입력 필드
export function Name() {
  return (
    <div css={Field}>
      <label css={FieldStyle}>
        <span css={labelTextStyle}>이름</span>
        <input type="text" placeholder="표시하고 싶은 이름을 적어 주세요" css={inputStyle} />
      </label>
    </div>
  );
}

// 비밀번호 입력 필드
export function Password() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const clickPasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div css={Field}>
      <label css={FieldStyle}>
        <span css={labelTextStyle}>비밀번호</span>
        <input
          type={passwordVisible ? 'text' : 'password'}
          placeholder="영문+숫자 6자 이상을 입력해주세요"
          css={inputStyle}
        />
        <img
          src={passwordVisible ? openeye : closeeye}
          alt="비밀번호 보기 아이콘"
          css={eyeIconStyle}
          onClick={clickPasswordVisibility}
        />
      </label>
    </div>
  );
}

// 전체 사용자 정보 입력 폼
function UserInfo() {
  return (
    <div>
      <Name />
      <Id />
      <Password />
    </div>
  );
}

export default UserInfo;
