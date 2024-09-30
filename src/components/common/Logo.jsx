/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Logo() {
  return (
    <div css={containerLogo}>
      <a href='/list/'>LogoImg</a>
    </div>
  );
}

const containerLogo = css`
border:0;
`;
export default Logo;