/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import imgLogo from '../../assets/img-logo.svg';

function Logo() {
  return (
    <div css={containerLogo}>
      <a href='/list'><img src={imgLogo} alt='LogoImg' /></a>
    </div>
  );
}

const containerLogo = css`
border:0;
`;
export default Logo;