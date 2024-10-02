/** @jsxImportSource @emotion/react */

import { useRef, useState } from 'react';
import icMeatBall from '../assets/images/ic-meatball.svg';
import { icContainer } from './ShareButton';
import ProfileDropDown from './ProfileDropDown';
import { css } from '@emotion/react';

function MeatballButton() {
  const [isOpen, setIsOpen] = useState(false);
  const menu = useRef(null);
  const handleCloseMenu = (e) => {
    if (isOpen && !menu.current?.contains(e.target)) {
      setIsOpen(false);
    }
  };

  document.addEventListener('mousedown', handleCloseMenu);

  return (
    <>
      <div
        ref={menu}
        css={css`
          ${icContainer};
          position: relative;
        `}
        onClick={() => setIsOpen(!isOpen)}>
        <img src={icMeatBall} alt="더보기 아이콘" />
        {isOpen && <ProfileDropDown />}
      </div>
    </>
  );
}

export default MeatballButton;
