/** @jsxImportSource @emotion/react */

import { useRef, useState } from 'react';
import icMeatBall from '../assets/images/ic-meatball.svg';
import { icContainer } from './ShareButton';

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
      <div ref={menu} css={icContainer} onClick={() => setIsOpen(!isOpen)}>
        <img src={icMeatBall} alt="더보기 아이콘" />
      </div>
      {isOpen && (
        <ul>
          <li>수정하기</li>
          <li>삭제하기</li>
        </ul>
      )}
    </>
  );
}

export default MeatballButton;
