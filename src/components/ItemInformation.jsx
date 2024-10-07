/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';

const TitleStyle = css`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Container = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 696px;
  margin: 10px auto;
`;

const HeaderStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const FieldStyle = css`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 20px;
  padding-top: 15px;
  font-size: 14px;
  border: 0px;
  border-radius: 25px;
  background-color: #fafafb;
  box-sizing: border-box;
  justify-content: space-between;
  margin-top: 10px; /* 여기에 마진 추가 */
`;

const labelStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-bottom: 15px;
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

const addButton = css`
  font-size: 16px;
  font-weight: bold;
  background-color: white;
  color: #3e45ec;
  border: none;
  cursor: pointer;
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
  const [items, setItems] = useState([{ id: 1 }]);

  const addItem = () => {
    if (items.length < 3) {
      const newItemId = items.length + 1;
      setItems([...items, { id: newItemId }]);
    }
  };

  return (
    <div css={Container}>
      <div css={HeaderStyle}>
        <div css={TitleStyle}>대표상품</div>
        <button css={addButton} onClick={addItem}>
          추가
        </button>
      </div>
      {items.map((item) => (
        <form css={FieldStyle} key={item.id}>
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
        </form>
      ))}
    </div>
  );
}

export default ItemInformation;
