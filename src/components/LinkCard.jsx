/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import icHeartBlank from '../assets/images/ic-blank-heart.svg';
import icHeartFull from '../assets/images/ic-full-heart.svg';

function LinkCard ( {shop} ) {
  
  return (
    <div css={containerLinkCard}>
      <div css={containerShopProfile}>
        <img css={imgProfile} />
        <div>
          <div css={containerShopName}>{shop.name}</div>
          <div css={containerShopAccount}>@{shop.userId}</div>
        </div>
      </div>
      <div css={containerLikeIcon}>
        <img css={imgLikeIcon} src={icHeartBlank} />
        <div css={countLike}>{shop.likes}</div>
      </div>
      <div css={countRepresentProduct}>대표 상품 {shop.productsCount}</div>
      <div css={containerImgRepresentProduct}>
        <img css={imgProduct} />
      </div>
    </div>
  );
}

const containerLinkCard = css `
  position: relative;
  width: 100%;
  height: 237px;
  background-color: #fafafb;
  border: 0;
  border-radius: 24px;
  box-sizing: border-box;
  padding: 24px;
`;

const containerShopProfile = css `
  display: flex;
  width: 213px;
  height: 60px;
  padding: 0;
  align-items: center;
`;

const imgProfile = css `
  width: 60px;
  height: 60px;
  margin-right: 10px;
`;

const containerShopName = css `
  height: 21px;
  margin-bottom: 7px;
  font-size: 18px;
  font-weight: 600;
`;

const containerShopAccount = css `
  height: 19px;
  font-size: 16px;
  color: #888790;
`;

const containerLikeIcon = css `
  position: absolute;
  display: flex;
  top: 24px;
  right: 24px;
  width: 47px;
  justify-content: space-between;
  align-items: center;
`;

const imgLikeIcon = css `
  border: 0;
`;

const countLike = css `
  font-size: 16px;
  font-weight: 500;
`;
const countRepresentProduct = css `
  margin: 8px;
  font-size: 15px;
  font-weight: 500;
`;

const containerImgRepresentProduct = css `
  padding: 0;
`;

const imgProduct = css `
  width: 95px;
  height: 95px;
  border: 0;
  border-radius: 15px;
  background-color: #000000;
`;

export default LinkCard;