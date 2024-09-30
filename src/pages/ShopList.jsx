/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Logo from '../components/common/Logo';
import BtnCreate from '../components/common/BtnCreate';

function ShopList() {
  return (
    <div>
      <div css={containerHeader}>
        <Logo />
        <BtnCreate />
      </div>
    </div>
  );
}

const containerHeader = css `
border: 0;
`;
export default ShopList;