/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { shopLists } from "../api/link-shop-list";
import { useEffect, useState } from "react";
import Logo from '../components/common/Logo';
import CreateButton from '../components/common/CreateButton';
import LinkCard from '../components/LinkCard';

function ShopList() {
  const [shopList, setShopList] = useState([]);

  useEffect( () => {
    (async () => {
      const list = await shopLists();
      if(list) setShopList(list);
    })();
  }, []);

  return (
    <div css={containerShopList}>
      <div css={containerHeader}>
        <Logo />
        <CreateButton />
      </div>
      <div css={containerSearch}></div>
      <div css={containerDetailFilter}>상세 필터</div>
      <div css={containerLinkCardList}>
        {shopList.map((shop) => (
          <LinkCard shop={shop} />
        ))}
      </div>
    </div>
  );
}

const containerShopList = css `
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

const containerHeader = css `
  position: absolute;
  width:62.5%;
  top:40px;
  display: flex;
  justify-content: space-between;
`;

const containerSearch = css `
  position: absolute;
  top:108px;
  width:62.5%;
  border:1px solid #dddcdf;
  border-radius: 49px;
  height:55px;
  line-height: 55px;
`;

const containerDetailFilter = css `
  position: absolute;
  top:203px;
  width: 62.5%;
`;

const containerLinkCardList = css `
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 10px;
  column-gap: 10px;
  justify-content: space-between;
  width:62.5%;
  top: 256px;
`;

export default ShopList;