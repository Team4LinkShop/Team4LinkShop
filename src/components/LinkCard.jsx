/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from "react";
import LikeButton from './LikeButton';
import { shopProducts } from '../api/shop-products';
import { shopImg } from '../api/link-shop-img';

function LinkCard ( {shop} ) {
  const [productList, setproductList] = useState([]);
  const [shopImgs, setShopImgs] = useState([]);
  useEffect( () => {
    (async () => {
      const list = await shopProducts(shop.id);
      const images = await shopImg(shop.id);
      if(list) setproductList(list);
      if(images) setShopImgs(images);
    })();
  }, [shop.id]);
  
  return (
    <div css={containerLinkCard}>
      <div css={containerShopProfile}>
        <img css={imgProfile} src={shopImgs} alt={shop.name} />
        <div>
          <div css={containerShopName}>{shop.name}</div>
          <div css={containerShopAccount}>@{shop.userId}</div>
        </div>
      </div>
      <div css={containerLikeIcon}>
        <LikeButton linkShopId={shop.id} />
      </div>
      <div css={countRepresentProduct}>대표 상품 {shop.productsCount}</div>
      <div css={containerImgRepresentProduct}>
        {productList.map((product) => (
          <img css={imgProduct} src={product.imageUrl} />
          ))}
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
  object-fit: contain;
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

const countRepresentProduct = css `
  margin: 8px;
  font-size: 15px;
  font-weight: 500;
`;

const containerImgRepresentProduct = css `
  padding: 0;
  height: 95px;
  overflow: hidden;
`;

const imgProduct = css `
  width: 95px;
  height: 95px;
  border: 0;
  border-radius: 15px;
  background-color: #000000;
`;

export default LinkCard;