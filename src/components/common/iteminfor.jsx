/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const TitleStyle = css`
  text-align: left;
  font-size: 16px;
  font-weight: bold;
`;

const Field = css`
  width: 100%;
  max-width: 696px;
  height: 245px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FieldStyle = css`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 245px;
  padding: 20px;
  font-size: 14px;
  border: 0px;
  border-radius: 25px;
  background-color: #fafafb;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: start;
`;

const labelStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

const inputStyle = css`
  width: 100%;
  margin: 5px auto;
  font-size: 16px;
  background-color: #fafafb;
  border: 0px;
  outline: none;
  box-sizing: border-box;
`;

const fileButtonStyle = css`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 5px;
  background-color: #fafafb;
  color: blue;
  border: 1px solid blue;
  cursor: pointer;
  z-index: 1;
`;

function ItemInformation() {
  return (
    <div>
      <div css={TitleStyle}>대표상품</div>
      <div css={Field}>
        <div css={FieldStyle}>
          <label css={labelStyle}>
            상품 대표 이미지
            <input type="text" placeholder="상품 이미지를 첨부해주세요" css={inputStyle} />
            <button css={fileButtonStyle}>파일첨부</button>
          </label>
          <label css={labelStyle}>
            상품 이름
            <input type="text" placeholder="상품 이름을 입력해 주세요" css={inputStyle} />
          </label>
          <label css={labelStyle}>
            상품 가격
            <input type="text" placeholder="원화로 표기해 주세요" css={inputStyle} />
          </label>
        </div>
      </div>
    </div>
  );
}

export default ItemInformation;
