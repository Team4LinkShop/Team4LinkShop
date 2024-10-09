import { css } from '@emotion/react';

function ProfileDropDown({ onEditClick }) {
  return (
    <>
      <ul css={dropDownContainer}>
        <li onClick={onEditClick}>수정하기</li>
        <li>삭제하기</li>
      </ul>
    </>
  );
}

const dropDownContainer = css`
  background-color: #fff;
  position: absolute;
  top: 3.1rem;
  right: 0;
  margin: 0;
  padding: 0%;
  width: 16rem;
  text-align: center;
  box-shadow: 0 0.4rem 1.6rem 0 rgba(17, 34, 17, 0.05);
  border-radius: 0.6rem;
  z-index: 1;

  > li {
    padding: 1.8rem 4.6rem;
    border-top: 1px solid #ddd;
    border-right: 1px solid #ddd;
    border-left: 1px solid #ddd;
    cursor: pointer;
    font-weight: 500;
    font-size: 1.8rem;
    color: #14151a;
  }
  > li:first-of-type {
    border-bottom: none;
    border-radius: 0.6rem 0.6rem 0 0;
  }
  > li:last-of-type {
    border-bottom: 1px solid #ddd;
    border-radius: 0 0 0.6rem 0.6rem;
  }
`;

export default ProfileDropDown;
