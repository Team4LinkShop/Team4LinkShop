/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function BtnCreate() {
  return (
    <div css={containerBtnCreate}>
      <input type='button' value='생성하기' />
    </div>
  )
}
const containerBtnCreate = css`
border:0;
`;
export default BtnCreate;