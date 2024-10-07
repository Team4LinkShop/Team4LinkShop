/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function CreateButton() {
  return (
    <div css={containerBtnCreate}>
      <input css={btnCreate} type='button' value='생성하기' />
    </div>
  );
}

const containerBtnCreate = css `
  border:0;
`;

const btnCreate = css`
  width:98px;
  height:38px;
  background-color: #3e45ec;
  color:#ffffff;
  border:0;
  border-radius: 37px;
  line-height: 38px;
  font-size: 18px;
  text-align: center;
`;
export default CreateButton;