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
  height: 168px;
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
  height: 168px;
  padding: 20px;
  font-size: 14px;
  border: 0px;
  border-radius: 25px;
  background-color: #fafafb;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: start;
`;

const Container = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 696px;
  margin: 10px auto;
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

function MyShoppingMall() {
  return (
    <div css={Container}>
      <div css={TitleStyle}>내 쇼핑몰</div>
      <div css={Field}>
        <form css={FieldStyle}>
          <label css={labelStyle}>
            쇼핑몰 URL
            <input type="text" placeholder="URL을 입력해주세요" css={inputStyle} />
          </label>
          <label css={labelStyle}>
            URL 이름
            <input type="text" placeholder="URL이름을 입력해 주세요" css={inputStyle} />
          </label>
        </form>
      </div>
    </div>
  );
}

export default MyShoppingMall;
