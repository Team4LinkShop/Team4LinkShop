/** @jsxImportSource @emotion/react */

import icMeatBall from '../assets/images/ic-meatball.svg';
import { icContainer } from './ShareButton';

function MeatballButton() {
  return (
    <div css={icContainer}>
      <img src={icMeatBall} alt="더보기 아이콘" />
    </div>
  );
}

export default MeatballButton;
