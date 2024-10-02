/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function LinkCard () {
  return (
    <div css={containerLinkCard}>

    </div>
  );
}

const containerLinkCard = css `
  position: relative;
  width:49%;
  height:237px;
  background-color: #fafafb;
  border:0;
  border-radius: 24px;
  box-sizing: border-box;
  padding: 24px;
`;

export default LinkCard;