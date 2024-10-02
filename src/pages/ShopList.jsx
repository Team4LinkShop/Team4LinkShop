/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Logo from '../components/common/Logo';
import CreateButton from '../components/common/CreateButton';

function ShopList() {
  return (
    <div>
      <div css={containerHeader}>
        <Logo />
        <CreateButton />
      </div>
      <div css={containerSearch}></div>
      <div css={containerDetailFilter}></div>
      <div css={containerLinkCardList}>
        <div css={containerLinkCard}></div> {/* 이후 LinkCardList 컴포넌트 내부에 들어갈 부분 */}
      </div>
    </div>
  );
}

const containerHeader = css `
border: 0;
`;
export default ShopList;